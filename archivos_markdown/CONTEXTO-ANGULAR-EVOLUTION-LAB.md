Quiero continuar contigo un proyecto/tutorial llamado **Angular Evolution Lab**.

## 🎯 Objetivo del proyecto

Quiero construir un laboratorio práctico para estudiar la evolución de Angular desde **Angular 18 hasta Angular 22**.

La idea es implementar **el mismo CRUD de productos cinco veces**, utilizando una aplicación independiente para cada versión:

```text
angular-evolution-lab/
├── README.md
├── angular18_crud/
├── angular19_crud/
├── angular20_crud/
├── angular21_crud/
└── angular22_crud/
```

Cada aplicación debe ser funcional por sí misma.

El CRUD será esencialmente el mismo en las cinco versiones. Lo que irá cambiando será la forma de implementar las funcionalidades utilizando las APIs y patrones correspondientes a cada versión de Angular.

El objetivo NO es hacer una aplicación empresarial compleja. Es un **laboratorio educativo e interactivo** que permita comparar cómo evolucionó Angular.

---

# 🧠 Filosofía del proyecto

Quiero aprender Angular mientras construimos el proyecto.

Por eso:

* Explícame las cosas paso a paso.
* Vamos **de a poco**, no me entregues 20 pasos de una vez.
* Indícame siempre dónde ejecutar cada comando.
* Cuando corresponda, explícame si estoy trabajando en la raíz del proyecto o dentro de una versión específica.
* Prefiero comandos claros y bloques de código completos.
* Quiero comentarios en el código que expliquen las APIs importantes de Angular.
* No quiero sobreingeniería.
* Si algo puede hacerse de forma sencilla, hagámoslo sencillo.
* Si encontramos un error, primero entendamos el error antes de aplicar soluciones como `--force` o `--legacy-peer-deps`.
* No arregles problemas que no estén relacionados con el paso actual.
* Mantén el foco en el laboratorio.

---

# 🛠️ Stack

La intención es utilizar:

* Angular 18
* Angular 19
* Angular 20
* Angular 21
* Angular 22
* Node.js 22
* TypeScript
* Tailwind CSS
* npm

Estoy utilizando **fnm** para administrar Node.js.

La intención es utilizar Node 22 para el laboratorio cuando sea compatible con las versiones correspondientes.

Para crear cada proyecto quiero utilizar:

```bash
npx @angular/cli@VERSION new ...
```

en lugar de depender de una instalación global de Angular CLI.

---

# 🎨 Tailwind

Quiero utilizar Tailwind CSS en las cinco aplicaciones.

En Angular 18 estamos utilizando:

```text
Tailwind CSS 3.4.19
PostCSS
Autoprefixer
```

Esto es importante porque Angular 18 utiliza compatibilidad con Tailwind 2/3 en su builder.

Para Angular 18 ya hicimos:

```bash
npm install -D tailwindcss@3.4.19 postcss autoprefixer
```

y:

```bash
npx tailwindcss init -p
```

El `tailwind.config.js` quedó:

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

Y `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind fue probado correctamente con una página temporal.

---

# 🚫 Importante sobre errores anteriores

NO necesitamos repetir ni documentar los errores que tuvimos durante la instalación.

En particular:

* No incluir el conflicto inicial con Tailwind 4.
* No ejecutar `npm audit fix --force` solo porque aparecen vulnerabilidades.
* No cambiar dependencias arbitrariamente para solucionar problemas que no existen.
* No volver a investigar los warnings de `install-scripts` a menos que realmente causen un problema.

El objetivo es continuar desde el estado funcional actual.

---

# 📦 CRUD

La entidad será:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

El CRUD tendrá:

* Listar productos
* Crear productos
* Editar productos
* Eliminar productos
* Buscar productos

Inicialmente los datos estarán **en memoria**.

No quiero conectar todavía un backend.

Más adelante se podría conectar un backend NestJS, pero eso no es prioridad ahora.

---

# 📁 Arquitectura

Queremos mantener una arquitectura sencilla:

```text
src/
└── app/
    ├── components/
    │   ├── product-list/
    │   └── product-form/
    │
    ├── models/
    │   └── product.model.ts
    │
    ├── services/
    │   └── product.service.ts
    │
    ├── app.component.*
    └── app.config.ts
```

No quiero crear capas innecesarias.

---

# ✅ ESTADO ACTUAL — ANGULAR 18

Ya tenemos creado:

```text
angular18_crud/
```

Angular 18 fue creado utilizando Angular CLI 18.

El proyecto utiliza:

* Angular 18
* Node 22
* Tailwind CSS 3.4.19

También verificamos que Tailwind funciona correctamente.

---

# ✅ Archivos ya creados

## `src/app/models/product.model.ts`

Actualmente contiene:

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

## `src/app/services/product.service.ts`

Actualmente contiene:

```ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Teclado mecánico',
      description: 'Teclado mecánico RGB',
      price: 59990,
      stock: 15
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
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);

    if (index !== -1) {
      this.products[index] = product;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
```

---

# 🔵 PUNTO EXACTO DONDE QUEDAMOS

El siguiente paso pendiente es continuar con:

```text
ProductListComponent
```

Todavía NO hemos terminado el CRUD.

El siguiente comando que estaba preparado para ejecutar es:

```bash
ng generate component components/product-list
```

Después debemos implementar progresivamente:

1. `ProductListComponent`
2. Mostrar los productos
3. Eliminar productos
4. Buscar productos
5. `ProductFormComponent`
6. Crear productos
7. Editar productos
8. Validaciones
9. Mejorar UI con Tailwind
10. Revisar qué características específicas de Angular 18 podemos documentar en el código
11. Actualizar el README de Angular 18

---

# 📚 Evolución Angular 18 → 22

Una vez terminado Angular 18, repetiremos conceptualmente el mismo CRUD en:

```text
angular19_crud
angular20_crud
angular21_crud
angular22_crud
```

Queremos estudiar, entre otros temas:

* Standalone Components
* Signals
* `input()`
* `output()`
* Control Flow
* `@if`
* `@for`
* `@switch`
* `@defer`
* `inject()`
* Signal Queries
* Zoneless
* SSR
* Hydration
* Incremental Hydration
* Event Replay
* Formularios
* Signal Forms cuando corresponda
* Testing
* Cambios de Karma/Jasmine hacia Vitest cuando corresponda
* Cambios del build system
* Cambios del Angular CLI
* APIs nuevas
* APIs que pasan a stable
* APIs deprecated
* APIs removidas
* Cambios que pasan a ser default

IMPORTANTE:

Cuando lleguemos a estudiar las diferencias entre versiones, **verifica las fechas y el estado real de cada API en la documentación oficial de Angular**.

No asumir que una API fue introducida, estabilizada, deprecada o eliminada en una versión concreta sin verificarlo.

---

# 📝 Documentación

Cada proyecto debe tener su propio README:

```text
angular18_crud/README.md
angular19_crud/README.md
angular20_crud/README.md
angular21_crud/README.md
angular22_crud/README.md
```

Y el README raíz debe explicar la evolución completa.

Los comentarios del código deben explicar las características importantes de la versión.

Ejemplo del estilo deseado:

```ts
// Angular XX:
// Esta API permite realizar X.
// Se utiliza aquí para demostrar cómo Angular evolucionó
// respecto a la implementación utilizada en versiones anteriores.
```

No llenar el código de comentarios innecesarios. Solo documentar aquello que sea relevante para estudiar la evolución de Angular.

---

# 🎓 Resultado final esperado

Al terminar quiero tener algo parecido a:

```text
Angular Evolution Lab
│
├── Angular 18 CRUD
│   └── Implementación y conceptos de Angular 18
│
├── Angular 19 CRUD
│   └── Implementación y conceptos de Angular 19
│
├── Angular 20 CRUD
│   └── Implementación y conceptos de Angular 20
│
├── Angular 21 CRUD
│   └── Implementación y conceptos de Angular 21
│
└── Angular 22 CRUD
    └── Implementación y conceptos de Angular 22
```

La aplicación debe permitir que alguien pueda revisar el código de cada carpeta y entender **qué cambió entre las versiones de Angular**.

---

# ▶️ INSTRUCCIÓN PARA CONTINUAR

No vuelvas a empezar el proyecto.

Continúa exactamente desde el punto actual.

Primero ayúdame con:

```bash
ng generate component components/product-list
```

y luego seguimos implementando el CRUD **paso a paso**, explicando lo que hacemos y por qué.

No avances varios pasos de golpe: quiero trabajar contigo como si fuera un tutorial interactivo.
