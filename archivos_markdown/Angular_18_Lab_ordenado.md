# Angular 18 CRUD — Angular Evolution Lab

Documento ordenado y sin redundancia. Consolida las instrucciones del laboratorio para Angular 18.
Omite la conversación interactiva con el LLM, pruebas temporales y errores ya resueltos.

---

## 1. Objetivo del laboratorio

Construir un laboratorio práctico para estudiar la evolución de Angular desde **Angular 18 hasta Angular 22**.

La idea es implementar **el mismo CRUD de productos cinco veces**, con una aplicación independiente por versión:

```text
angular-evolution-lab/
├── README.md
├── angular18_crud/
├── angular19_crud/
├── angular20_crud/
├── angular21_crud/
└── angular22_crud/
```

- Cada aplicación es funcional por sí misma.
- El CRUD es esencialmente el mismo en las cinco versiones. Lo que cambia es la forma de implementarlo con las APIs y patrones de cada versión.
- No es una aplicación empresarial compleja. Es un **laboratorio educativo** para comparar cómo evolucionó Angular.

---

## 2. Filosofía de trabajo

- Explicar paso a paso, de a poco.
- Indicar siempre dónde ejecutar cada comando (raíz vs. carpeta de versión).
- Comandos claros y bloques de código completos.
- Comentarios en el código solo para APIs importantes de Angular.
- Sin sobreingeniería: lo sencillo, sencillo.
- Si hay un error, entenderlo antes de usar `--force` o `--legacy-peer-deps`.
- No arreglar problemas fuera del paso actual. Mantener el foco.

---

## 3. Stack

- Angular 18 / 19 / 20 / 21 / 22
- Node.js 22 (administrado con **fnm**, cuando sea compatible con cada versión)
- TypeScript
- Tailwind CSS
- npm

Para crear cada proyecto, sin depender de un CLI global:

```bash
npx @angular/cli@VERSION new ...
```

Ejemplo Angular 18 (desde la raíz):

```powershell
npx @angular/cli@18 new angular18_crud
```

Opciones usadas:

```text
Would you like to add Angular routing? → Yes
Which stylesheet format would you like to use? → CSS
Do you want to enable SSR / SSG? → No
```

Entrar al proyecto:

```powershell
cd angular18_crud
```

Ejecutar:

```powershell
npm start
# http://localhost:4200
```

> Nota: se usa `npx ng ...` (ej. `npx ng version`, `npx ng serve`, `npx ng generate ...`) en lugar de un `ng` global, para que cada carpeta controle su versión del CLI.

---

## 4. Tailwind CSS en Angular 18

En Angular 18 se usa:

```text
Tailwind CSS 3.4.19
PostCSS
Autoprefixer
```

Esto es importante porque el builder de Angular 18 mantiene compatibilidad con Tailwind 2/3.

Instalación (dentro de `angular18_crud`):

```bash
npm install -D tailwindcss@3.4.19 postcss autoprefixer
npx tailwindcss init -p
```

Esto crea `tailwind.config.js` y `postcss.config.js`.

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

`src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind ya fue verificado con una página temporal. A partir de ahí la UI se construye directamente con Tailwind, sin CSS innecesario. Separación de responsabilidades:

```text
Angular  → datos + lógica
Tailwind → presentación
```

> No documentar aquí errores históricos: conflicto inicial con Tailwind 4, `npm audit fix --force`, warnings de `install-scripts`. Se parte del estado funcional.

---

## 5. Entidad y alcance del CRUD

Modelo único para las cinco versiones:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

Operaciones:

- Listar productos
- Crear productos
- Editar productos
- Eliminar productos
- Buscar productos

Datos **en memoria**. Sin backend por ahora. Más adelante se podría conectar NestJS, no prioritario.

Reglas de validación (desde Angular 18):

| Campo | Regla |
|---|---|
| Nombre | Obligatorio (sin solo-espacios) |
| Descripción | Obligatoria |
| Precio | > 0 |
| Stock | >= 0 (0 = agotado, válido) |

---

## 6. Arquitectura

Arquitectura sencilla, sin capas innecesarias:

```text
src/
└── app/
    ├── components/
    │   ├── product-list/
    │   └── product-form/
    ├── models/
    │   └── product.model.ts
    ├── services/
    │   └── product.service.ts
    ├── app.component.*
    └── app.config.ts
```

Flujo final:

```text
AppComponent
├── ProductListComponent ── (edit) ──> AppComponent
│       │                                     │
│       │ ProductService                      │ [productToEdit] / (saved)
│       ▼                                     ▼
│   Product[]                       ProductFormComponent
│                                             │
│                                    ProductService
└─────────────────────────────────────────────┘
```

- Hermanos no se hablan directo. El padre (`AppComponent`) es intermediario vía `@Input` / `@Output`.
- Generación de componentes:

```powershell
npx ng generate component components/product-list
npx ng generate component components/product-form
```

---

## 7. Estado actual — Angular 18

Proyecto creado:

```text
angular18_crud/
```

- Angular 18 (CLI 18), Node 22, Tailwind 3.4.19 verificado.
- Checklist:

```text
[x] Crear proyecto Angular 18
[x] Configurar y verificar Tailwind
[x] Modelo Product
[x] ProductService (get/add/update/delete + nextId)
[x] ProductListComponent (listar, buscar, eliminar, editar-emit)
[x] ProductFormComponent (crear, editar, validación, cancelar)
[x] AppComponent como mediador (selectedProduct)
[ ] Mensajes visuales de error en formulario (pendiente menor)
[ ] README de Angular 18
```

---

## 8. Implementación final consolidada

Solo se muestra el código final. Sin pasos intermedios ni pruebas temporales.

### 8.1 `src/app/models/product.model.ts`

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

### 8.2 `src/app/services/product.service.ts`

Responsabilidad: administrar productos e IDs en memoria. En una app real con backend, el ID lo generaría la base de datos.

```ts
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // Siguiente ID. Parte en 4 porque hay 3 productos iniciales.
  // No reutiliza IDs eliminados: es un contador, no el menor ID libre.
  private nextId: number = 4;

  private products: Product[] = [
    {
      id: 1,
      name: "Teclado Mecanico",
      description: "Teclado mecánico de alta calidad",
      price: 100,
      stock: 10
    },
    {
      id: 2,
      name: 'Mouse gamer',
      description: 'Mouse inalámbrico',
      price: 39990,
      stock: 20
    },
    {
      id: 3,
      name: 'Monitor 27"',
      description: 'Monitor QHD 180 Hz',
      price: 249990,
      stock: 8
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    product.id = this.nextId;
    this.nextId++;
    this.products.push(product)
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
       this.products[index] = updatedProduct;
      }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
```

API del servicio:

```text
getProducts()   → READ
addProduct()    → CREATE
updateProduct() → UPDATE
deleteProduct() → DELETE
```

### 8.3 `components/product-list`

**`product-list.component.ts`**

Puntos clave: Standalone + `imports: [CommonModule, FormsModule]`, inyección por constructor, `searchTerm` + `searchProducts()`, `deleteProduct()`, `@Output() edit`.

```ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Evento hacia el padre: "quieren editar este producto".
  @Output() edit = new EventEmitter<Product>();

  products: Product[];

  searchTerm = '';

  // Angular inyecta ProductService. La asignación va en el constructor,
  // no en el inicializador de propiedad, por orden de inicialización TS.
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getProducts();
  }

  searchProducts(): Product[] {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }

  editProduct(product: Product): void {
    this.edit.emit(product);
  }
}
```

**`product-list.component.html`**

Puntos clave: `[(ngModel)]` para búsqueda (requiere `FormsModule`), `*ngFor` clásico, `(click)` para editar/eliminar.

```html
<div class="mt-8 w-full max-w-4xl mx-auto">

  <h2 class="mb-4 text-2xl font-semibold text-white">
    Productos
  </h2>

  <div class="mb-6">
    <label
      for="search"
      class="mb-2 block text-sm font-medium text-slate-300"
    >
      Buscar producto
    </label>

    <!-- depende del FormsModule importado en el componente.ts -->
    <input
      id="search"
      type="text"
      [(ngModel)]="searchTerm"
      placeholder="Escribe el nombre del producto..."
      class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">

    <table class="w-full text-left text-sm text-slate-300">

      <thead class="bg-slate-800 text-xs uppercase text-slate-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Producto</th>
          <th scope="col" class="px-6 py-3">Descripción</th>
          <th scope="col" class="px-6 py-3">Precio</th>
          <th scope="col" class="px-6 py-3">Stock</th>
          <th scope="col" class="px-6 py-3">Acciones</th>
        </tr>
      </thead>

      <tbody>

        <tr
          *ngFor="let product of searchProducts()"
          class="border-b border-slate-700"
        >
          <td class="px-6 py-4">
            {{ product.id }}
          </td>

          <td class="px-6 py-4 font-medium text-white">
            {{ product.name }}
          </td>

          <td class="px-6 py-4">
            {{ product.description }}
          </td>

          <td class="px-6 py-4">
            ${{ product.price }}
          </td>

          <td class="px-6 py-4">
            {{ product.stock }}
          </td>

          <td class="px-6 py-4">
            <div class="flex gap-2">

              <button
                type="button"
                class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                (click)="editProduct(product)"
              >
                Editar
              </button>

              <button
                type="button"
                class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                (click)="deleteProduct(product.id)"
              >
                Eliminar
              </button>

            </div>
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>
```

### 8.4 `components/product-form`

**`product-form.component.ts`**

Puntos clave: `@Input() productToEdit`, `@Output() saved`, `OnChanges` + copia `{...}`, `isEditing`, `isFormValid()`, `add/update/cancel`.

```ts
import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnChanges {

  // Producto que envía el padre para editar. null = modo creación.
  @Input() productToEdit: Product | null = null;

  // Avisa al padre que terminó (actualizó o canceló).
  @Output() saved = new EventEmitter<void>();

  isEditing = false;

  product: Product = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    stock: 0
  };

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productToEdit'] && this.productToEdit) {
      // Copia superficial para no mutar la tabla mientras se edita.
      // Suficiente porque Product solo tiene primitivos.
      this.product = { ...this.productToEdit };
      this.isEditing = true;
    }
  }

  isFormValid(): boolean {
    return (
      this.product.name.trim() !== '' &&
      this.product.description.trim() !== '' &&
      this.product.price > 0 &&
      this.product.stock >= 0
    );
  }

  addProduct(): void {
    if(!this.isFormValid()) {
      return;
    }
    this.productService.addProduct(this.product);

    this.product = {
      id: 0,
      description: '',
      name: '',
      price: 0,
      stock: 0
    };
  }

  updateProduct(): void {

    if (!this.isFormValid()) {
      return;
    }

    this.productService.updateProduct(this.product);

    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };

    this.isEditing = false;

    this.saved.emit();
  }

  cancelEdit(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };

    this.isEditing = false;

    this.saved.emit();
  }
}
```

**`product-form.component.html`**

Puntos clave: `[(ngModel)]` + `name=` por campo, `*ngIf` para alternar Agregar / Actualizar / Cancelar.

```html
<div class="mt-8 w-full max-w-4xl mx-auto">

  <h2 class="mb-4 text-2xl font-semibold text-white">
    Agregar producto
  </h2>

  <form class="rounded-lg border border-slate-700 bg-slate-900 p-6">

    <!-- Nombre -->
    <div class="mb-4">
      <label
        for="name"
        class="mb-2 block text-sm font-medium text-slate-300"
      >
        Nombre
      </label>

      <input
        id="name"
        type="text"
        [(ngModel)]="product.name"
        name="name"
        placeholder="Nombre del producto"
        class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <!-- Descripción -->
    <div class="mb-4">
      <label
        for="description"
        class="mb-2 block text-sm font-medium text-slate-300"
      >
        Descripción
      </label>

      <textarea
        id="description"
        [(ngModel)]="product.description"
        name="description"
        rows="3"
        placeholder="Descripción del producto"
        class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
      ></textarea>
    </div>

    <!-- Precio -->
    <div class="mb-4">
      <label
        for="price"
        class="mb-2 block text-sm font-medium text-slate-300"
      >
        Precio
      </label>

      <input
        id="price"
        type="number"
        [(ngModel)]="product.price"
        name="price"
        placeholder="Precio"
        class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <!-- Stock -->
    <div class="mb-6">
      <label
        for="stock"
        class="mb-2 block text-sm font-medium text-slate-300"
      >
        Stock
      </label>

      <input
        id="stock"
        type="number"
        [(ngModel)]="product.stock"
        name="stock"
        placeholder="Stock"
        class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <!-- Botón -->
    <button
      *ngIf="!isEditing"
      type="button"
      (click)="addProduct()"
      class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
    >
      Agregar producto
    </button>

    <button
      *ngIf="isEditing"
      type="button"
      (click)="updateProduct()"
      class="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
    >
      Actualizar producto
    </button>

    <button
      *ngIf="isEditing"
      type="button"
      (click)="cancelEdit()"
      class="ml-2 rounded-lg bg-slate-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
    >
      Cancelar
    </button>

  </form>

</div>
```

Flujo edición:

```text
Editar
  ↓ selectedProduct = producto
Formulario recibe producto ([productToEdit])
  ↓ ngOnChanges copia + isEditing=true
Usuario modifica
  ↓ Actualizar → updateProduct() → Service
  ↓ saved.emit() → onProductSaved() → selectedProduct=null
Formulario vuelve a creación

Cancelar → cancelEdit() → limpia + isEditing=false + saved.emit()
  (sin llamar al servicio)
```

### 8.5 `app.component`

**`app.component.ts`**

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  // Angular 18 - Standalone Components:
  // Los componentes que utilizamos en el template
  // deben estar disponibles mediante imports.
  imports: [RouterOutlet, ProductListComponent, ProductFormComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18_crud';

  selectedProduct: Product | null = null;

  onEditProduct(product: Product): void {
    this.selectedProduct = product;
  }

  onProductSaved(): void {
    this.selectedProduct = null;
  }
}
```

**`app.component.html`**

```html
<div class="min-h-screen bg-slate-950 flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-5xl font-bold text-white">
      Angular 18 CRUD
    </h1>

    <app-product-list
      (edit)="onEditProduct($event)"
    ></app-product-list>

    <app-product-form
      [productToEdit]="selectedProduct"
      (saved)="onProductSaved()"
    />

    <p class="mt-4 text-lg text-slate-400">
      Angular Evolution Lab
    </p>
  </div>
</div>
<router-outlet />
```

Sintaxis fundamental usada:

```html
(edit)="onEditProduct($event)"       <!-- escucha @Output -->
[productToEdit]="selectedProduct"    <!-- property binding @Input -->
(saved)="onProductSaved()"           <!-- fin edición -->
```

`$event` contiene el `Product` emitido con `this.edit.emit(product)`.

---

## 9. Decisiones de laboratorio — Angular 18

Implementación deliberadamente representativa de su época, para comparar después:

| Tema | Angular 18 (este CRUD) | Comparación futura (19-22) |
|---|---|---|
| Componentes | Standalone (`standalone: true`, `imports: [...]`) | Cada vez más natural / default |
| Listas / condicionales | `*ngFor`, `*ngIf` + `CommonModule` | `@for (track ...)`, `@if`, `@switch`, `@defer` |
| Inyección | `constructor(private productService: ProductService)` | `inject(ProductService)` |
| Comunicación | `@Input() productToEdit`, `@Output() edit/saved` + `EventEmitter`, `ngOnChanges`, `SimpleChanges` | `input()`, `output()`, Signal Queries |
| Formularios | `FormsModule`, `[(ngModel)]` + `name=`, validación manual `isFormValid()` | Reactive → Signal Forms |
| Estado | Array en memoria + `push` / `filter` / `findIndex`, `nextId`, copia `{...}` para editar | Signals, `signal`, `computed`, `effect` |
| Detección cambios | Zone.js (default) | Zoneless |
| Render | CSR, sin SSR | SSR / Hydration / Incremental Hydration / Event Replay |

Notas intencionales:

- No se usa `inject()` todavía, aunque existe, para ver la evolución.
- No se usa `@for` / `@if` todavía, aunque el control flow ya es estable en 18, para tener base `*ngFor` comparable.
- Validación manual a propósito: cada CRUD debe ser funcional, la forma de validar evolucionará en versiones posteriores.
- `nextId` no reutiliza IDs. Simula IDs de DB en memoria.

---

## 10. Roadmap Evolución 18 → 22

Una vez cerrado Angular 18, repetir conceptualmente el mismo CRUD en:

```text
angular19_crud
angular20_crud
angular21_crud
angular22_crud
```

Temas a estudiar (verificar cada uno en documentación oficial, no asumir versión):

- Standalone Components
- Signals, `effect`, `linkedSignal`
- `input()`, `output()`, Signal Queries
- Control Flow: `@if`, `@for`, `@switch`, `@defer`
- `inject()`
- Zoneless
- SSR, Hydration, Incremental Hydration, Event Replay
- Formularios, Signal Forms cuando corresponda
- Testing: Karma/Jasmine → Vitest cuando corresponda
- Build system, Angular CLI
- APIs nuevas / stable / deprecated / removidas / que pasan a default
- Migraciones oficiales (`standalone`, control flow, `inject()`, `input()`, `output()`, queries...)

Etiquetas a documentar por cambio:

```text
NEW / STABLE / DEPRECATED / REMOVED / MIGRATION / DEFAULT
```

---

## 11. Documentación esperada

Cada proyecto con su README:

```text
angular18_crud/README.md
angular19_crud/README.md
angular20_crud/README.md
angular21_crud/README.md
angular22_crud/README.md
```

README raíz explica la evolución completa.

Comentarios en código solo para lo relevante a la evolución. Estilo:

```ts
// Angular XX:
// Esta API permite X.
// Se utiliza aquí para demostrar cómo evolucionó
// respecto a versiones anteriores.
```

No llenar de comentarios innecesarios.

Resultado final esperado:

```text
Angular Evolution Lab
│
├── Angular 18 CRUD → Implementación y conceptos de Angular 18
├── Angular 19 CRUD → Implementación y conceptos de Angular 19
├── Angular 20 CRUD → Implementación y conceptos de Angular 20
├── Angular 21 CRUD → Implementación y conceptos de Angular 21
└── Angular 22 CRUD → Implementación y conceptos de Angular 22
```

Alguien debe poder revisar cada carpeta y entender **qué cambió entre versiones**.

---

## 12. Cierre Angular 18 y siguiente paso

Estado CRUD:

```text
CREATE ✅
READ   ✅
UPDATE ✅
DELETE ✅
SEARCH ✅
```

Patrones vistos:

```text
Standalone Components ✅
CommonModule ✅
FormsModule + [(ngModel)] ✅
Event Binding (click) ✅
Property Binding [productToEdit] ✅
@Input / @Output / EventEmitter ✅
ngOnChanges ✅
constructor injection ✅
*ngFor / *ngIf ✅
```

Pendiente menor antes de dar por cerrado:

- Mostrar mensajes visuales de por qué el formulario es inválido (hoy solo hace `return` silencioso).
- Actualizar README de Angular 18.
- Documentar características específicas de Angular 18 en código.

Después: iniciar **Angular 19** con el mismo CRUD, aplicando sus APIs y patrones, verificando en docs oficiales.

---

*Archivo generado por ordenamiento de `Angular_18_Lab.md`: sin redundancia y sin transcripción conversacional.*
