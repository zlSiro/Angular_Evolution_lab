# Angular 18 CRUD

CRUD educativo desarrollado con Angular 18 como parte de **Angular Evolution Lab**.

El objetivo de este proyecto es implementar el mismo CRUD utilizando diferentes versiones de Angular para observar cómo evoluciona el framework, sus APIs, patrones de desarrollo y herramientas.

---

## 🎯 Objetivo

Construir una aplicación CRUD de productos utilizando:

* Angular 18
* TypeScript
* Tailwind CSS
* npm
* Node.js 22
* Datos almacenados en memoria

La aplicación permite:

* Listar productos
* Buscar productos
* Crear productos
* Editar productos
* Eliminar productos
* Cancelar una edición
* Validar datos antes de guardar

No existe backend en esta etapa.

---

## 📦 Modelo

La entidad utilizada durante todo el laboratorio es:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

---

## 🏗️ Arquitectura

La aplicación utiliza una estructura sencilla basada en componentes, modelos y servicios:

```text
src/app/
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

### Componentes

#### ProductListComponent

Responsable de:

* Mostrar los productos.
* Buscar productos.
* Emitir el producto seleccionado para edición.
* Eliminar productos.

#### ProductFormComponent

Responsable de:

* Crear productos.
* Editar productos.
* Cancelar una edición.
* Validar los datos antes de guardar.

#### AppComponent

Actúa como componente padre y coordina la comunicación entre:

```text
ProductListComponent
        ↓
   AppComponent
        ↓
ProductFormComponent
```

---

# 🧠 Conceptos de Angular 18 utilizados

## Standalone Components

La aplicación utiliza componentes standalone.

Ejemplo:

```ts
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
```

Los componentes declaran directamente sus dependencias mediante `imports`.

---

## Inyección de dependencias mediante constructor

El servicio se inyecta mediante el constructor:

```ts
constructor(private productService: ProductService) {}
```

Esto permite utilizar `ProductService` desde el componente.

En versiones posteriores del laboratorio se comparará este patrón con otras formas de inyección disponibles en Angular.

---

## Servicios

El acceso y modificación de los productos está centralizado en:

```text
src/app/services/product.service.ts
```

El servicio utiliza:

```ts
@Injectable({
  providedIn: 'root'
})
```

Por lo tanto, Angular administra una instancia global del servicio.

Actualmente los productos viven únicamente en memoria.

---

# 🔄 Comunicación entre componentes

Angular 18 utiliza los decoradores clásicos:

```ts
@Input()
@Output()
```

## @Output()

`ProductListComponent` informa al componente padre qué producto se desea editar:

```ts
@Output() edit = new EventEmitter<Product>();
```

Al hacer clic en Editar:

```ts
this.edit.emit(product);
```

El componente padre escucha el evento:

```html
<app-product-list
  (edit)="onEditProduct($event)"
></app-product-list>
```

---

## @Input()

`AppComponent` entrega el producto seleccionado al formulario:

```html
<app-product-form
  [productToEdit]="selectedProduct"
  (saved)="onProductSaved()"
></app-product-form>
```

El formulario recibe el producto mediante:

```ts
@Input() productToEdit: Product | null = null;
```

---

# 🔁 Ciclo de edición

El flujo de edición es:

```text
Usuario
  │
  ▼
Editar producto
  │
  ▼
ProductListComponent
  │
  │ @Output()
  ▼
AppComponent
  │
  │ @Input()
  ▼
ProductFormComponent
  │
  ▼
Usuario modifica datos
  │
  ▼
Actualizar
  │
  ▼
ProductService
```

Para evitar modificar accidentalmente el objeto original mientras se edita, el formulario crea una copia:

```ts
this.product = { ...this.productToEdit };
```

---

# 📝 Formularios

Angular 18 utiliza `FormsModule` y `[(ngModel)]` para implementar el formulario.

Ejemplo:

```html
<input
  type="text"
  [(ngModel)]="product.name"
  name="name"
/>
```

La directiva `[(ngModel)]` permite mantener sincronizado el valor del input con la propiedad correspondiente del componente.

También se utiliza para implementar la búsqueda:

```html
<input
  type="text"
  [(ngModel)]="searchTerm"
/>
```

---

# 🔎 Búsqueda

La búsqueda se realiza sobre los productos existentes en memoria.

```ts
searchProducts(): Product[] {
```
