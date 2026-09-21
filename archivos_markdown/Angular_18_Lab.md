# ANGULAR LAB 18


# Paso a Paso

Vamos a crea un tutorial para ver los cambios de las versiones desde angular 18 a angular 22:

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

_/** @type {import('tailwindcss').Config} */_

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

    │   ├── product-list/

    │   └── product-form/

    │

    ├── models/

    │   └── product.model.ts

    │

    ├── services/

    │   └── product.service.ts

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

  addProduct(_product_: Product): void {

    this.products.push(product);

  }

  updateProduct(_product_: Product): void {

    const index = this.products.findIndex(_p_ => p.id === product.id);

    if (index !== -1) {

      this.products[index] = product;

    }

  }

  deleteProduct(_id_: number): void {

    this.products = this.products.filter(_p_ => p.id !== id);

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

_// Angular XX:_

_// Esta API permite realizar X._

_// Se utiliza aquí para demostrar cómo Angular evolucionó_

_// respecto a la implementación utilizada en versiones anteriores._

```

No llenar el código de comentarios innecesarios. Solo documentar aquello que sea relevante para estudiar la evolución de Angular.

---

# 🎓 Resultado final esperado

Al terminar quiero tener algo parecido a:

```text

Angular Evolution Lab

│

├── Angular 18 CRUD

│   └── Implementación y conceptos de Angular 18

│

├── Angular 19 CRUD

│   └── Implementación y conceptos de Angular 19

│

├── Angular 20 CRUD

│   └── Implementación y conceptos de Angular 20

│

├── Angular 21 CRUD

│   └── Implementación y conceptos de Angular 21

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

---


Perfecto, Juan Pablo. Continuamos **exactamente desde donde quedamos**. No vamos a rehacer nada de Angular 18 ni tocar Tailwind.

## Paso 1 — Crear `ProductListComponent`

Estamos trabajando **dentro de la carpeta del proyecto Angular 18**:

```text
angular-evolution-lab/
└── angular18_crud/   ← estamos aquí
```

### 1. Verifica que estás dentro de `angular18_crud`

En la terminal:

```bash
pwd
```

Deberías obtener algo parecido a:

```text
.../angular-evolution-lab/angular18_crud
```

Y puedes comprobar que estás en un proyecto Angular con:

```bash
ls
```

Deberías ver archivos/carpetas como:

```text
angular.json
package.json
src
tsconfig.json
```

### 2. Generamos el componente

**Ejecuta este comando dentro de `angular18_crud`:**

```bash
ng generate component components/product-list
```

También podrías usar la versión corta:

```bash
ng g c components/product-list
```

Pero para nuestro laboratorio prefiero inicialmente la forma larga, porque hace más evidente qué está haciendo el comando.

Angular CLI debería crear:

```text
src/app/components/product-list/
├── product-list.component.css
├── product-list.component.html
├── product-list.component.spec.ts
└── product-list.component.ts
```

### 🧠 ¿Qué estamos haciendo aquí?

Estamos creando nuestro primer componente específico del CRUD.

Por ahora **no vamos a modificar nada más**.

Nuestro objetivo inmediato será que `ProductListComponent` pueda recibir y mostrar los productos provenientes de `ProductService`.

Y aquí aparece una de las cosas interesantes del laboratorio: aunque el CRUD sea conceptualmente el mismo en Angular 18 → 22, iremos cambiando **la forma idiomática de implementar la comunicación entre componentes, estado, queries, formularios, etc.**

En Angular 18 comenzaremos con las APIs que correspondan a esa versión, y cuando lleguemos a Angular 19/20/21/22 verificaremos en la documentación oficial qué cambió realmente.

---

### Ahora haz solamente esto

Ejecuta:

```bash
ng generate component components/product-list
```

Y **pásame la salida que te entregue la terminal**.

No avancemos todavía al HTML ni al servicio. Primero comprobamos que el componente se creó correctamente.


---


Sí 😄, **partimos corrigiendo eso antes de tocar el proyecto**. El error es sencillo y, de hecho, es importante para nuestro laboratorio.

El problema **no está en Angular 18 ni en el proyecto**.

```text
ng: El término "ng" no se reconoce...
```

significa que PowerShell no encuentra un ejecutable llamado `ng` en el `PATH`.

Y esto tiene relación directa con algo que tú mismo definiste para el laboratorio:

> Queremos usar `npx @angular/cli@VERSION` en lugar de depender de una instalación global de Angular CLI.

Por lo tanto, **no vamos a instalar Angular CLI globalmente solo para poder escribir `ng`**.

### Lo correcto para nuestro proyecto

Como estamos dentro de:

```text
C:\Users\jvaldebenito\dev\angular-evolution-lab\angular18_crud
```

vamos a ejecutar el CLI de Angular 18 mediante `npx`.

Primero quiero que hagamos **solo una comprobación**.

### Paso 1 — Ver qué versión de Angular CLI tiene este proyecto

Ejecuta **en PowerShell, dentro de `angular18_crud`**:

```powershell
npx ng version
```

Esto es distinto de:

```powershell
ng version
```

porque `npx` buscará el CLI disponible para el proyecto y puede ejecutarlo sin que tengas `ng` instalado globalmente.

Pásame **la salida completa de `npx ng version`**.

Después de comprobar que efectivamente estamos usando Angular CLI 18, ejecutaremos:

```powershell
npx ng generate component components/product-list
```

Así mantenemos exactamente la filosofía del **Angular Evolution Lab**: cada proyecto controla su propia versión del CLI y no dependemos de una instalación global.


---


Perfecto 👌. Entonces seguimos **solo con el siguiente paso**.

Ya tenemos:

```text
angular18_crud/
└── src/
    └── app/
        ├── components/
        │   └── product-list/
        │       ├── product-list.component.css
        │       ├── product-list.component.html
        │       ├── product-list.component.spec.ts
        │       └── product-list.component.ts
        ├── models/
        │   └── product.model.ts
        └── services/
            └── product.service.ts
```

## Paso 2 — Entender `ProductListComponent`

Antes de escribir código, vamos a mirar **qué nos creó Angular 18**.

Abre:

```text
src/app/components/product-list/product-list.component.ts
```

Probablemente tengas algo parecido a:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
```

### 🧠 Primera cosa importante del laboratorio

Fíjate en esto:

```ts
@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
```

En nuestro proyecto Angular 18 estamos trabajando con **Standalone Components**.

Eso significa que este componente **no necesita ser declarado dentro de un `NgModule`**.

La propiedad:

```ts
imports: []
```

es precisamente uno de los lugares donde posteriormente podremos declarar las dependencias que necesita el componente, por ejemplo:

```ts
imports: [CommonModule]
```

o las APIs necesarias para formularios, etc.

Esto será interesante cuando comparemos la evolución de Angular, porque podremos ver cómo Angular ha ido haciendo cada vez más natural este modelo.

---

### Por ahora NO vamos a modificar el TypeScript.

Nuestro siguiente objetivo es muy concreto:

> **Hacer que `ProductListComponent` obtenga los productos desde `ProductService` y los muestre.**

Pero antes de eso quiero que hagamos una cosa muy pequeña.

Abre:

```text
src/app/components/product-list/product-list.component.html
```

y dime **qué contenido te generó Angular 18**.

No lo reemplaces todavía. Pásame ese contenido y seguimos desde ahí.


---


Perfecto. Ese es exactamente el HTML inicial que genera Angular CLI:

```html
<p>product-list works!</p>
```

Ahora vamos a hacer **una sola cosa**: reemplazar ese contenido por una primera lista de productos, pero todavía **sin eliminar, buscar ni formularios**.

## Paso 3 — Conectar `ProductListComponent` con `ProductService`

Primero necesitamos que el componente pueda acceder al servicio que ya creamos.

Abre:

```text
angular18_crud/
└── src/
    └── app/
        └── components/
            └── product-list/
                └── product-list.component.ts
```

Actualmente tienes algo similar a:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
```

Vamos a modificar **solamente este archivo**.

Déjalo así:

```ts
import { Component } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Obtenemos una instancia de ProductService.
  constructor(private productService: ProductService) {}

  // Guardamos los productos que vienen desde el servicio.
  products: Product[] = this.productService.getProducts();
}
```

### 🧠 ¿Qué acabamos de hacer?

Hay dos conceptos importantes.

#### 1. Importamos nuestro modelo

```ts
import { Product } from '../../models/product.model';
```

Esto nos permite decir:

```ts
products: Product[]
```

es decir:

> `products` será un arreglo de objetos que cumplen la estructura `Product`.

---

#### 2. Inyectamos `ProductService`

```ts
constructor(private productService: ProductService) {}
```

Angular crea y nos entrega la instancia del servicio.

Nuestro servicio ya tiene:

```ts
getProducts(): Product[] {
  return this.products;
}
```

Por eso podemos hacer:

```ts
this.productService.getProducts()
```

y obtener los tres productos que ya definimos.

---

### ⚠️ Un detalle importante para nuestro laboratorio

**No estamos usando Signals todavía.**

Eso es intencional.

Estamos construyendo primero una implementación sencilla del CRUD y después podremos introducir las APIs que queremos estudiar durante la evolución Angular 18 → 22.

---

### Ahora haz solamente esto

Reemplaza el contenido de:

```text
src/app/components/product-list/product-list.component.ts
```

por el código anterior.

**No modifiques todavía el HTML.**

Cuando lo tengas, dime `listo` y hacemos el siguiente paso: **mostrar esos tres productos en pantalla**.


---


Excelente. Ahora sí vamos a hacer que esos productos aparezcan en pantalla. 👌

## Paso 4 — Mostrar los productos

Estamos trabajando solamente en:

```text
angular18_crud/
└── src/
    └── app/
        └── components/
            └── product-list/
                └── product-list.component.html
```

Actualmente tienes:

```html
<p>product-list works!</p>
```

Vamos a reemplazarlo por una primera versión sencilla:

```html
<div>
  <h2>Productos</h2>

  <ul>
    <li *ngFor="let product of products">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</div>
```

### 🧠 ¿Qué estamos aprendiendo aquí?

La parte importante es:

```html
*ngFor="let product of products"
```

`*ngFor` es la directiva tradicional de Angular para repetir un elemento por cada elemento de una colección.

Tenemos:

```ts
products: Product[]
```

con nuestros tres productos:

```text
Teclado mecánico
Mouse gamer
Monitor 27"
```

Entonces Angular genera conceptualmente:

```html
<li>Teclado mecánico - $59990</li>
<li>Mouse gamer - $39990</li>
<li>Monitor 27" - $249990</li>
```

No estamos escribiendo esos elementos manualmente: Angular los genera a partir de `products`.

---

### ⚠️ Y aquí tenemos nuestro primer punto interesante para el laboratorio

Más adelante, cuando lleguemos a las APIs modernas de Angular, vamos a poder reemplazar:

```html
*ngFor="let product of products"
```

por el nuevo control flow:

```html
@for (product of products; track product.id) {
  ...
}
```

Pero **no lo hagamos todavía**.

Queremos que este proyecto nos permita observar realmente la evolución:

```text
Angular 18
    ↓
*ngFor
    ↓
versiones posteriores
    ↓
@for
```

Y cuando lleguemos a esa parte verificaremos exactamente en qué versión y estado de Angular corresponde cada cambio.

---

### Ahora ejecuta la aplicación

Desde **PowerShell, dentro de `angular18_crud`**:

```powershell
npx ng serve
```

Luego abre:

```text
http://localhost:4200
```

Pero hay un detalle: **todavía no hemos colocado `ProductListComponent` dentro de `AppComponent`**, así que es posible que sigas viendo la pantalla inicial de Angular.

Eso es totalmente esperado.

**No arreglemos eso todavía.** Primero quiero que me confirmes si al ejecutar `npx ng serve` aparece algún error en la terminal.

Pásame la salida si aparece alguno.


---


Exactamente. Y **este error sí vale la pena entenderlo**, porque no es un problema de Angular sino de **inicialización de propiedades de TypeScript**.

Tenemos esto:

```ts
constructor(private productService: ProductService) {}

products: Product[] = this.productService.getProducts();
```

El problema es que `products` se inicializa **antes de que TypeScript considere inicializado el parámetro `productService` del constructor**.

No vamos a usar `--force`, cambiar configuraciones ni tocar dependencias. Lo corregimos de forma sencilla.

## Paso 4.1 — Corregir la inicialización

Vamos a mover la asignación de `products` al constructor.

Deja `product-list.component.ts` así:

```ts
import { Component } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Lista de productos que mostraremos en el template.
  products: Product[];

  // Angular inyecta ProductService en el componente.
  constructor(private productService: ProductService) {
    // El servicio ya está disponible dentro del constructor.
    this.products = this.productService.getProducts();
  }
}
```

### 🧠 ¿Por qué ahora funciona?

El orden conceptual es:

```text
1. Angular crea ProductListComponent
          ↓
2. Angular proporciona ProductService
          ↓
3. Se ejecuta el constructor
          ↓
4. this.productService ya existe
          ↓
5. Obtenemos los productos
```

Por eso esto:

```ts
this.products = this.productService.getProducts();
```

ya puede ejecutarse correctamente.

---

### Una pequeña observación para nuestro laboratorio

Más adelante veremos otras formas de hacer esta inyección, por ejemplo:

```ts
private productService = inject(ProductService);
```

pero **no cambiemos a `inject()` todavía**.

Precisamente queremos que el laboratorio nos permita ver cómo evolucionan las APIs y patrones de Angular.

---

### Ahora haz solamente esto

Reemplaza tu `product-list.component.ts` con el código anterior.

Después ejecuta nuevamente:

```powershell
npx ng serve
```

Si ya estaba corriendo, Angular debería recompilar automáticamente.

**Dime solamente si el error desapareció.** Después nos ocuparemos de conectar `ProductListComponent` con `AppComponent`.


---


Exactamente. Y lo de `CommonModule` **es correcto**. De hecho, acabamos de encontrar otro detalle importante de los Standalone Components de Angular 18.

El problema de que no se renderice nada ahora es distinto: **nuestro `ProductListComponent` existe, pero todavía no lo estamos utilizando desde `AppComponent`.**

Vamos a resolver **solo eso**.

## Paso 5 — Mostrar `ProductListComponent` en `AppComponent`

Nuestro árbol actualmente es algo así:

```text
AppComponent
    │
    └── ???  ← ProductListComponent todavía no está aquí
```

Crear un componente no significa que Angular automáticamente lo coloque en la aplicación.

### 1. Primero necesitamos su selector

Nuestro componente tiene:

```ts
@Component({
  selector: 'app-product-list',
  ...
})
```

Por lo tanto, podemos utilizarlo mediante:

```html
<app-product-list></app-product-list>
```

Pero como estamos usando **Standalone Components**, `AppComponent` debe importar explícitamente `ProductListComponent`.

---

### 2. Abre `app.component.ts`

Busca:

```text
angular18_crud/
└── src/
    └── app/
        └── app.component.ts
```

Probablemente tengas algo parecido a:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
```

Vamos a agregar nuestro componente.

Déjalo así:

```ts
import { Component } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',

  // Angular 18 - Standalone Components:
  // Los componentes que utilizamos en el template
  // deben estar disponibles mediante imports.
  imports: [ProductListComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
```

### 3. Ahora modifica `app.component.html`

Busca:

```text
src/app/app.component.html
```

El CLI probablemente dejó bastante contenido generado por Angular.

**Puedes reemplazar todo el contenido** por:

```html
<h1>Angular 18 - Product CRUD</h1>

<app-product-list></app-product-list>
```

Y listo.

---

### 🧠 ¿Qué acabamos de hacer?

Ahora tenemos esta relación:

```text
AppComponent
    │
    └── ProductListComponent
            │
            └── ProductService
                    │
                    └── products[]
```

Y el HTML:

```html
<app-product-list></app-product-list>
```

le dice a Angular:

> "Renderiza aquí una instancia de `ProductListComponent`."

---

### Y sobre `CommonModule`

Lo que hiciste también es correcto.

Para que `*ngFor` esté disponible en un **Standalone Component**, agregaste:

```ts
import { CommonModule } from '@angular/common';
```

y:

```ts
imports: [CommonModule]
```

Eso nos da una oportunidad excelente para nuestro laboratorio.

En esta implementación de Angular 18 tenemos:

```ts
imports: [CommonModule]
```

y utilizamos:

```html
<li *ngFor="let product of products">
```

Más adelante podremos comparar esto directamente con:

```html
@for (product of products; track product.id) {
  ...
}
```

y estudiar qué implica realmente el nuevo control flow.

---

**Haz solamente estos dos cambios** (`app.component.ts` y `app.component.html`) y guarda los archivos.

Luego dime qué aparece en `http://localhost:4200`.

Si aparece nuestra lista con:

```text
Teclado mecánico
Mouse gamer
Monitor 27"
```

habremos completado la primera conexión real del CRUD.


---


Perfecto. Viendo ambos archivos, **la configuración de `AppComponent` está bien**. No necesitamos reemplazarla por la que te mostré antes.

De hecho, tienes algo importante que conservar:

```ts
imports: [RouterOutlet, ProductListComponent],
standalone: true,
```

Eso está correcto para este proyecto.

Y tu HTML también contiene correctamente:

```html
<app-product-list></app-product-list>
```

Así que ahora tenemos que mirar **por qué el componente hijo no está mostrando su contenido**.

### Primero: no cambiemos nada

Quiero que hagamos una comprobación muy pequeña antes de tocar código.

Abre:

```text
src/app/components/product-list/product-list.component.html
```

y dime exactamente cómo quedó después de que agregaste `*ngFor`.

Debería ser algo parecido a:

```html
<div>
  <h2>Productos</h2>

  <ul>
    <li *ngFor="let product of products">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</div>
```

Pero quiero ver **tu archivo real**, porque ya hiciste el cambio de `CommonModule` y prefiero no asumir cómo quedó.

Además, una observación: tu `app.component.html` está centrando todo dentro de un contenedor, pero **eso no debería impedir que `ProductListComponent` se renderice**.

Así que pásame `product-list.component.ts` y `product-list.component.html` tal como los tienes ahora, y revisamos el flujo:

```text
AppComponent
    ↓
<app-product-list>
    ↓
ProductListComponent
    ↓
ProductService
    ↓
products[]
```

No vamos a cambiar nada más hasta encontrar exactamente dónde se está cortando ese flujo.


---


Ahora sí, con estos archivos se ve mucho mejor. **`ProductListComponent` está correctamente configurado** y `CommonModule` también está bien.

Hay una cosa que quiero corregir de mi explicación anterior: **no necesitamos cambiar tu `AppComponent`**. Tu configuración con `RouterOutlet` y `ProductListComponent` es válida.

Vamos a diagnosticarlo de forma ordenada.

## Paso 5.1 — Comprobemos si el componente realmente se está renderizando

Tu componente tiene:

```ts
selector: 'app-product-list'
```

y `AppComponent` tiene:

```html
<app-product-list></app-product-list>
```

Por lo tanto, Angular debería renderizarlo.

Ahora hagamos una prueba **sin `ProductService`, sin `*ngFor` y sin ninguna otra cosa**.

En:

```text
src/app/components/product-list/product-list.component.html
```

reemplaza temporalmente todo por:

```html
<h2>PRODUCT LIST FUNCIONA</h2>
```

Guarda el archivo y mira:

```text
http://localhost:4200
```

### ¿Qué queremos comprobar?

Si aparece:

```text
Angular 18 CRUD

PRODUCT LIST FUNCIONA

Angular Evolution Lab
```

entonces sabemos que:

```text
AppComponent
    ↓
ProductListComponent
```

está funcionando correctamente.

Si **NO aparece**, entonces el problema está antes de llegar al template de `ProductListComponent` y seguiremos investigando desde ahí.

---

### No cambies `product-list.component.ts`

Déjalo exactamente como está.

Tampoco toquemos:

- `ProductService`
    
- `AppComponent`
    
- Tailwind
    
- Router
    
- configuración de Angular
    

Por ahora solo estamos haciendo una prueba de aislamiento.

**Haz ese cambio temporal y dime si aparece `PRODUCT LIST FUNCIONA`.**


---


Perfecto. Eso nos da una pista importante: **el componente sí funciona**, así que el problema anterior quedó descartado.

El mensaje:

> `ProductListComponent is not used within the template of AppComponent`

es un **diagnóstico del editor/linter**, no un error de ejecución. Pero en tu caso hay algo interesante: **sí tienes `<app-product-list></app-product-list>` en `app.component.html`**, así que quiero comprobar que Angular/TypeScript esté viendo exactamente el mismo selector.

Tu `ProductListComponent` declara:

```ts
selector: 'app-product-list',
```

y tu template usa:

```html
<app-product-list></app-product-list>
```

Eso coincide perfectamente.

### Paso 5.2 — Volvamos a nuestro HTML de productos

Como acabamos de comprobar que el componente se renderiza, restauremos:

```html
<div>
  <h2>Productos</h2>

  <ul>
    <li *ngFor="let product of products">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</div>
```

Guarda y mira el navegador.

Si aparecen los tres productos:

```text
Teclado mecánico - $59990
Mouse gamer - $39990
Monitor 27" - $249990
```

entonces **el CRUD ya está obteniendo correctamente los datos desde `ProductService`**.

### Sobre el warning

Por ahora **no vamos a perseguir ese warning**.

La evidencia que acabamos de obtener es mucho más importante:

```text
AppComponent
    ↓
<app-product-list>
    ↓
ProductListComponent       ✅
    ↓
ProductService             ✅
    ↓
getProducts()              ✅
    ↓
products[]                 ✅
```

Si la lista aparece, continuamos con el CRUD. El warning del editor lo podemos revisar después si sigue apareciendo, pero no quiero desviarnos del laboratorio por un diagnóstico que **no está impidiendo ejecutar la aplicación**.

**Restaura el HTML de la lista y dime si aparecen los tres productos.**


---


😂 Clásico warning de VS Code que desaparece justo cuando lo estás mirando. Perfecto.

Y sí: **queda como parte del contexto del laboratorio que Angular 18 ya tiene Tailwind 3.4.19 funcionando**. A partir de ahora iremos construyendo la UI directamente con Tailwind, sin meter CSS innecesario.

Ahora que tenemos funcionando:

```text
AppComponent
    ↓
ProductListComponent
    ↓
ProductService
    ↓
products[]
```

vamos al siguiente pequeño objetivo.

# Paso 6 — Mejorar la lista de productos con Tailwind

Todavía **no vamos a eliminar ni buscar**.

Primero quiero que nuestro `ProductListComponent` deje de ser una lista HTML básica y tengamos una pequeña tabla de productos.

Actualmente tenemos:

```html
<div>
  <h2>Productos</h2>

  <ul>
    <li *ngFor="let product of products">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</div>
```

Vamos a reemplazar **solo el HTML** por esto:

```html
<div class="mt-8 w-full max-w-4xl mx-auto">

  <h2 class="mb-4 text-2xl font-semibold text-white">
    Productos
  </h2>

  <div class="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">

    <table class="w-full text-left text-sm text-slate-300">

      <thead class="bg-slate-800 text-xs uppercase text-slate-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Producto</th>
          <th scope="col" class="px-6 py-3">Descripción</th>
          <th scope="col" class="px-6 py-3">Precio</th>
          <th scope="col" class="px-6 py-3">Stock</th>
        </tr>
      </thead>

      <tbody>

        <tr
          *ngFor="let product of products"
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
        </tr>

      </tbody>

    </table>

  </div>

</div>
```

### 🧠 ¿Qué estamos haciendo?

Seguimos usando exactamente la misma lógica Angular:

```html
*ngFor="let product of products"
```

Lo único que cambió es la **presentación**.

Angular sigue obteniendo:

```ts
products: Product[];
```

desde:

```ts
this.productService.getProducts();
```

Y Tailwind se ocupa exclusivamente de la apariencia:

```text
Angular
└── datos + lógica

Tailwind
└── presentación
```

Esta separación nos viene muy bien para el laboratorio porque **no queremos que los cambios visuales se confundan con los cambios de arquitectura/API de Angular**.

---

### ⚠️ Una cosa que quiero mantener

Todavía **no vamos a cambiar `*ngFor` por `@for`**.

Aunque `@for` será muy importante en nuestro estudio de evolución, queremos que Angular 18 tenga una implementación representativa de su época y después podamos comparar:

```text
Angular 18
*ngFor
    ↓
Angular moderno
@for
```

Cuando lleguemos a esa comparación, verificaremos en la documentación oficial exactamente cuándo se introdujo y cómo evolucionó.

---

### Haz solamente esto

Reemplaza el contenido de:

```text
src/app/components/product-list/product-list.component.html
```

por el código anterior.

Guarda y revisa:

```text
http://localhost:4200
```

Deberías tener nuestro primer pequeño **CRUD visual** con los tres productos.

Cuando confirmes que se ve bien, el siguiente paso será **agregar la acción de eliminar**, que será nuestro primer comportamiento real del CRUD.


---


¡Vamos! 😎 Ya tenemos la base visual funcionando. Ahora sí empezamos con **comportamiento real del CRUD**.

Vamos a avanzar **un solo paso**: **eliminar productos**.

# Paso 7 — Eliminar un producto

Nuestro `ProductService` ya tiene esta función:

```ts
deleteProduct(id: number): void {
  this.products = this.products.filter(p => p.id !== id);
}
```

Así que el servicio **ya sabe eliminar**. Lo que nos falta es darle al usuario una forma de ejecutar esa operación desde `ProductListComponent`.

## 7.1 — Agregar el método `deleteProduct()`

Abre:

```text
src/app/components/product-list/product-list.component.ts
```

Actualmente tienes:

```ts
export class ProductListComponent {

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}
```

Vamos a agregar un método:

```ts
export class ProductListComponent {

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);

    this.products = this.productService.getProducts();
  }

}
```

### 🧠 ¿Qué está pasando?

Cuando el usuario pulse el botón:

```text
ProductListComponent
        ↓
deleteProduct(id)
        ↓
ProductService
        ↓
deleteProduct(id)
        ↓
products[]
```

Después volvemos a obtener los productos:

```ts
this.products = this.productService.getProducts();
```

para que el componente tenga la lista actualizada.

### Una observación importante

Estamos haciendo esto de una manera **deliberadamente sencilla**.

No estamos introduciendo todavía:

- Signals
    
- `effect()`
    
- `computed()`
    
- RxJS
    
- NgRx
    
- una arquitectura reactiva compleja
    

Queremos que el laboratorio muestre primero una implementación sencilla y después podamos estudiar cómo las APIs modernas de Angular cambian estas decisiones.

---

# 7.2 — Agregar el botón

Ahora vamos al template:

```text
src/app/components/product-list/product-list.component.html
```

En nuestra tabla tenemos actualmente:

```html
<th scope="col" class="px-6 py-3">Stock</th>
```

Vamos a agregar una columna:

```html
<th scope="col" class="px-6 py-3">Acciones</th>
```

Y dentro del `<tr>` agregamos:

```html
<td class="px-6 py-4">
  <button
    type="button"
    class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
    (click)="deleteProduct(product.id)"
  >
    Eliminar
  </button>
</td>
```

La fila completa quedaría así:

```html
<tr
  *ngFor="let product of products"
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
    <button
      type="button"
      class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      (click)="deleteProduct(product.id)"
    >
      Eliminar
    </button>
  </td>
</tr>
```

## 🧠 Primera interacción Angular importante

Aquí aparece:

```html
(click)="deleteProduct(product.id)"
```

Esta es la **event binding syntax** de Angular.

Le estamos diciendo:

> Cuando ocurra el evento `click`, ejecuta el método `deleteProduct()` del componente y pásale el ID del producto.

Por ejemplo, para el teclado:

```text
click
  ↓
deleteProduct(1)
  ↓
ProductService.deleteProduct(1)
```

---

### 🧪 Prueba

Guarda los archivos y pulsa:

**Eliminar** en cualquiera de los tres productos.

Deberías poder pasar de:

```text
Teclado mecánico
Mouse gamer
Monitor 27"
```

a, por ejemplo:

```text
Teclado mecánico
Monitor 27"
```

Y si eliminas los tres, la tabla debería quedar sin filas.

**Haz solamente esta implementación y prueba eliminar los productos.**

Cuando confirmes que funciona, seguimos con el siguiente pequeño paso: **la búsqueda de productos**.


---


¡Excelente! 🔥 Ya tenemos **Read + Delete** funcionando.

Nuestro CRUD de Angular 18 ahora mismo está así:

```text
ProductService
├── getProducts()     ✅
├── addProduct()      ⏳
├── updateProduct()   ⏳
└── deleteProduct()   ✅

ProductListComponent
├── Listar            ✅
├── Eliminar          ✅
└── Buscar            ⏳
```

Ahora vamos con **Buscar**, pero nuevamente **solo un paso**.

# Paso 8 — Búsqueda de productos

Aquí quiero que aprendamos algo importante de Angular 18: podemos manejar perfectamente este pequeño estado local sin introducir ninguna librería ni arquitectura adicional.

## 8.1 — Agregar el término de búsqueda

Abre:

```text
src/app/components/product-list/product-list.component.ts
```

Actualmente tienes:

```ts
export class ProductListComponent {

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);

    this.products = this.productService.getProducts();
  }

}
```

Vamos a agregar una propiedad:

```ts
searchTerm = '';
```

Quedando:

```ts
export class ProductListComponent {

  products: Product[];

  searchTerm = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);

    this.products = this.productService.getProducts();
  }

}
```

### 🧠 ¿Qué representa?

```ts
searchTerm = '';
```

será simplemente el texto que escriba el usuario.

Por ejemplo:

```text
searchTerm = "mouse"
```

Más adelante tendremos que decidir cómo utilizarlo para filtrar `products`.

Pero **todavía no vamos a implementar el filtro**.

---

## Tu única tarea ahora

Agrega:

```ts
searchTerm = '';
```

debajo de:

```ts
products: Product[];
```

Guarda el archivo.

Cuando lo tengas, dime **"listo"** y hacemos el siguiente paso: conectar ese valor con un `<input>` usando Angular.


---


Perfecto 😎. Ahora vamos a conectar `searchTerm` con la interfaz.

# Paso 8.2 — Crear el campo de búsqueda

Vamos a trabajar **solo en el HTML de `ProductListComponent`**.

Abre:

```text
angular18_crud/
└── src/
    └── app/
        └── components/
            └── product-list/
                └── product-list.component.html
```

Dentro del `<div>` principal, **antes del `<div>` que contiene la tabla**, agrega:

```html
<div class="mb-6">
  <label
    for="search"
    class="mb-2 block text-sm font-medium text-slate-300"
  >
    Buscar producto
  </label>

  <input
    id="search"
    type="text"
    [(ngModel)]="searchTerm"
    placeholder="Escribe el nombre del producto..."
    class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
  />
</div>
```

Por ejemplo, la estructura quedará:

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

    <input
      id="search"
      type="text"
      [(ngModel)]="searchTerm"
      placeholder="Escribe el nombre del producto..."
      class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">

    <!-- nuestra tabla -->

  </div>

</div>
```

## 🧠 Aquí aparece algo nuevo: `[(ngModel)]`

Esta parte:

```html
[(ngModel)]="searchTerm"
```

es **two-way data binding** de Angular.

Tenemos:

```text
Usuario escribe
      ↓
<input>
      ↓
searchTerm
```

y Angular mantiene sincronizado el valor del input con:

```ts
searchTerm = '';
```

Por ejemplo, si escribes:

```text
mouse
```

el componente tendrá:

```ts
searchTerm === 'mouse'
```

### ⚠️ Pero nos falta una dependencia

Como estamos usando:

```html
[(ngModel)]
```

Angular necesita la directiva `ngModel`.

En nuestro Standalone Component, `CommonModule` **no es suficiente**.

Así que en:

```text
product-list.component.ts
```

cambia:

```ts
import { CommonModule } from '@angular/common';
```

por:

```ts
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
```

Y cambia:

```ts
imports: [CommonModule],
```

por:

```ts
imports: [CommonModule, FormsModule],
```

Quedará:

```ts
import { Component } from '@angular/core';
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

  products: Product[];

  searchTerm = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);

    this.products = this.productService.getProducts();
  }

}
```

### 🎓 Esto nos servirá más adelante

Estamos usando una API clásica:

```text
FormsModule
└── [(ngModel)]
```

No vamos a reemplazarla ahora.

Cuando avancemos por las versiones podremos estudiar cómo Angular fue incorporando nuevas APIs para manejar estado y formularios, y especialmente dónde entra **Signal Forms** en la evolución real.

---

### 🧪 Ahora prueba solamente esto

1. Agrega `FormsModule`.
    
2. Agrega el `<input>`.
    
3. Guarda.
    
4. Abre la aplicación.
    
5. Escribe algo en el campo.
    

**Todavía no esperes que la tabla se filtre.**

Por ahora solamente queremos comprobar que:

```text
<input>
   ↕
searchTerm
```

funciona correctamente.

Cuando puedas escribir en el campo sin errores, seguimos con **el filtro real de los productos**.


---


¡Perfecto! 🔥 Pero ojo con una precisión: **por ahora tenemos el campo de búsqueda operativo, pero todavía no el filtro de la tabla**. El `searchTerm` cambia; los productos aún no se están filtrando.

Vamos a hacer **solo ese siguiente paso**.

# Paso 8.3 — Filtrar los productos

Queremos que si escribes:

```text
mouse
```

la tabla muestre solamente:

```text
Mouse gamer
```

## 1. Agregar un método de búsqueda

Abre:

```text
src/app/components/product-list/product-list.component.ts
```

Agrega este método debajo de `deleteProduct()`:

```ts
searchProducts(): Product[] {
  const term = this.searchTerm.toLowerCase().trim();

  if (!term) {
    return this.products;
  }

  return this.products.filter(product =>
    product.name.toLowerCase().includes(term)
  );
}
```

Tu componente quedará conceptualmente así:

```ts
export class ProductListComponent {

  products: Product[];

  searchTerm = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);

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

}
```

### 🧠 ¿Qué hace?

Primero:

```ts
const term = this.searchTerm.toLowerCase().trim();
```

Convertimos:

```text
"  Mouse  "
```

en:

```text
"mouse"
```

Después:

```ts
this.products.filter(...)
```

crea una nueva lista solamente con los productos cuyo nombre contiene el término.

Por ejemplo:

```text
products
├── Teclado mecánico
├── Mouse gamer
└── Monitor 27"
```

Buscando:

```text
monitor
```

obtenemos:

```text
Monitor 27"
```

---

## 2. Cambiar el `*ngFor`

Ahora tenemos que utilizar nuestro método.

Busca:

```html
*ngFor="let product of products"
```

y cámbialo por:

```html
*ngFor="let product of searchProducts()"
```

Por lo tanto:

```html
<tr
  *ngFor="let product of searchProducts()"
  class="border-b border-slate-700"
>
```

### 🧠 ¿Por qué funciona?

Cada vez que Angular procesa el template, evalúa:

```ts
searchProducts()
```

Como `searchTerm` cambia mediante:

```html
[(ngModel)]="searchTerm"
```

el template vuelve a evaluarse y obtenemos los productos correspondientes.

Tenemos:

```text
Usuario escribe
      ↓
[(ngModel)]
      ↓
searchTerm
      ↓
searchProducts()
      ↓
filter()
      ↓
tabla
```

### ⚠️ Una decisión deliberada

Podríamos empezar inmediatamente a hablar de `computed()`, Signals, optimización, pipes, RxJS, etc.

**No lo vamos a hacer.**

Esta implementación es suficientemente sencilla para nuestro CRUD de laboratorio y nos permitirá posteriormente comparar cómo las herramientas modernas de Angular pueden cambiar este tipo de código.

---

### 🧪 Prueba

Guarda y prueba:

```text
mouse
```

Luego:

```text
teclado
```

Luego:

```text
monitor
```

Y finalmente deja el campo vacío.

Deberías obtener nuevamente los tres productos.

**Haz solamente este cambio y dime si el filtro funciona correctamente.**


---


Sí, **paremos aquí**. No sigamos agregando cosas mientras el template tiene un error de sintaxis. 👍

El error:

```text
NG5002: Opening tag "input" not terminated.
src/app/components/product-list/product-list.component.html:15:4
```

significa literalmente que Angular encontró:

```html
<input
```

pero **no encontró correctamente el cierre de esa etiqueta**.

En Angular, aunque HTML permite ciertas variantes, nuestro `<input>` debe quedar correctamente cerrado.

### 1. Revisa tu `<input>`

Déjalo exactamente así:

```html
<input
  id="search"
  type="text"
  [(ngModel)]="searchTerm"
  placeholder="Escribe el nombre del producto..."
  class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
/>
```

Fíjate especialmente en la última línea:

```html
/>
```

Ese es el cierre del elemento.

---

### 2. El bloque completo de búsqueda

Para evitar que haya algún carácter extraño o que haya quedado una etiqueta incompleta, puedes reemplazar **solo el bloque de búsqueda** por este:

```html
<div class="mb-6">
  <label
    for="search"
    class="mb-2 block text-sm font-medium text-slate-300"
  >
    Buscar producto
  </label>

  <input
    id="search"
    type="text"
    [(ngModel)]="searchTerm"
    placeholder="Escribe el nombre del producto..."
    class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
  />
</div>
```

### 🧠 Importante

El error **no tiene relación con `searchProducts()`**, ni con `ProductService`, ni con Angular Forms.

Es simplemente un problema de HTML en el template.

Por ahora **no cambies el TypeScript**.

Haz solamente esa corrección y guarda.

Si el error desaparece, ahí sí retomamos desde el punto exacto donde quedamos: comprobar que `searchProducts()` filtre correctamente.


---


¡Exactamente! Ahí está el problema, mi buen 😄. **La etiqueta `<input />` sí está correctamente cerrada.** El problema está en esta parte:

```html
[(ngModel)]="searchTerm" *// depende del FormsModule importado en el componente.ts*
```

Eso **no es un comentario HTML válido**. Angular intenta interpretar `*// ...` como parte del atributo y termina creyendo que el `<input>` quedó mal formado.

### Déjalo así

En:

`src/app/components/product-list/product-list.component.html`

reemplaza **solo el `<input>`** por:

```html
<input
  id="search"
  type="text"
  [(ngModel)]="searchTerm"
  placeholder="Escribe el nombre del producto..."
  class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
/>
```

Si quieres dejar la explicación como comentario, en HTML debe ser:

```html
<!-- depende del FormsModule importado en el componente.ts -->
<input
  id="search"
  type="text"
  [(ngModel)]="searchTerm"
  placeholder="Escribe el nombre del producto..."
  class="block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
/>
```

### ¿Por qué pasó?

Yo te había dejado algo parecido a:

```html
[(ngModel)]="searchTerm" *// depende del FormsModule importado...*
```

Ese `*//` **no debería haber estado ahí**. El comentario que acompaña al código no puede ir dentro de la etiqueta de esa forma.

Y tienes razón en lo principal: **el cierre `/>` estaba bien**. El error NG5002 era provocado por el contenido del atributo, no por el cierre.

Haz solamente ese cambio y dime si desaparece el `NG5002`. **No toquemos todavía el TypeScript ni avancemos al CRUD.**


---


JAJAJA 😂 sí, clásico: **comentario de TypeScript/JS metido en HTML**.

Perfecto, entonces seguimos exactamente donde quedamos. Tenemos:

```text
ProductService
├── getProducts()     ✅
├── addProduct()      ⏳
├── updateProduct()   ⏳
└── deleteProduct()   ✅

ProductListComponent
├── Listar            ✅
├── Eliminar          ✅
├── Buscar            ✅
└── Buscar filter     ✅
```

Ahora toca una pieza importante del CRUD: **crear productos**.

## 🧩 Paso siguiente: `ProductFormComponent`

Vamos a crear el componente encargado exclusivamente del formulario.

### 1. Ejecuta en PowerShell

Ubícate dentro de:

```text
angular-evolution-lab/angular18_crud
```

y ejecuta:

```powershell
npx ng generate component components/product-form
```

Esto debería crear:

```text
src/app/components/product-form/
├── product-form.component.css
├── product-form.component.html
├── product-form.component.spec.ts
└── product-form.component.ts
```

### 2. Por ahora, solo créalo

**No escribamos todavía el formulario.**

Cuando termine el comando, dime `listo` y vemos primero el `product-form.component.ts`.

La idea es que en este Angular 18 lo hagamos de la forma **clásica** con `FormsModule` + `[(ngModel)]`. Más adelante, cuando lleguemos a Angular 21/22, podremos comparar esto con las APIs modernas de formularios y ver qué cambió realmente. 🔥


---


Perfecto, mi buen 😎. Ahora vamos **por partes**, porque este componente nos va a servir para estudiar cómo se construía un formulario CRUD en Angular 18.

## 1. Primero: `product-form.component.ts`

Abre:

```text
angular18_crud/
└── src/
    └── app/
        └── components/
            └── product-form/
                └── product-form.component.ts
```

El componente generado debería ser parecido a esto:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

}
```

Vamos a prepararlo para usar `[(ngModel)]`.

### Reemplázalo por:

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

}
```

### ¿Qué acabamos de hacer?

Hay tres cosas importantes.

**1. `FormsModule`**

```ts
import { FormsModule } from '@angular/forms';
```

Y luego:

```ts
imports: [FormsModule]
```

Esto nos permite utilizar:

```html
[(ngModel)]
```

en el HTML.

---

**2. Importamos nuestro modelo**

```ts
import { Product } from '../../models/product.model';
```

Así el formulario sabe exactamente qué estructura tiene un producto.

---

**3. Creamos el producto que vamos a editar desde el formulario**

```ts
product: Product = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0
};
```

Por ahora `id: 0` significa simplemente **"todavía no tiene un ID real"**.

Más adelante nuestro `ProductService` será quien genere el ID al crear un producto.

---

### ⚠️ Todavía NO hagamos el HTML

Primero quiero que dejemos claro el TypeScript del componente.

Guarda el archivo y dime si te queda **sin errores**. Después hacemos el formulario HTML con Tailwind y conectamos cada campo mediante `[(ngModel)]`.


---


Perfecto 🔥. Ahora viene la parte entretenida: **construir el formulario y conectar el HTML con nuestro objeto `product`**.

## 2. Construimos `product-form.component.html`

Abre:

```text
src/app/components/product-form/product-form.component.html
```

Vamos a hacer un formulario sencillo pero ya con una apariencia decente usando Tailwind.

Reemplaza todo el contenido por esto:

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
      type="button"
      class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
    >
      Agregar producto
    </button>

  </form>

</div>
```

### 🧠 Fíjate especialmente en esto

Por ejemplo:

```html
[(ngModel)]="product.name"
```

Eso crea el enlace entre el input y nuestro objeto:

```ts
product: Product = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0
};
```

Si escribes:

```text
Teclado Logitech
```

Angular va actualizando:

```ts
product.name
```

automáticamente.

Lo mismo hacemos con:

```html
[(ngModel)]="product.description"
[(ngModel)]="product.price"
[(ngModel)]="product.stock"
```

Y hay otro detalle importante:

```html
name="name"
name="description"
name="price"
name="stock"
```

Como estamos utilizando `[(ngModel)]` dentro de un `<form>`, Angular necesita que cada control tenga un atributo `name`.

---

### 🧪 Prueba

Guarda el archivo y mira la aplicación.

**Pero todavía no debería aparecer el formulario.** 😁

¿Por qué?

Porque creamos `ProductFormComponent`, pero todavía **no lo hemos incorporado al `AppComponent`**.

Ese será nuestro siguiente paso.

Primero dime si el proyecto **compila sin errores con este HTML**.


---


Excelente, mi rey 😎. Ahora vamos a **hacer que Angular realmente muestre el formulario**.

## 3. Conectar `ProductFormComponent` con `AppComponent`

Nuestro componente existe, pero Angular todavía no sabe que queremos utilizarlo dentro de `AppComponent`.

Abre:

```text
src/app/app.component.ts
```

Actualmente tienes algo parecido a:

```ts
imports: [RouterOutlet, ProductListComponent],
```

### Cámbialo para incluir `ProductFormComponent`

Primero agrega el import:

```ts
import { ProductFormComponent } from './components/product-form/product-form.component';
```

Y luego modifica `imports`:

```ts
imports: [
  RouterOutlet,
  ProductListComponent,
  ProductFormComponent
],
```

Por lo tanto, tu `app.component.ts` debería quedar aproximadamente así:

```ts
import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@Component({
  selector: 'app-root',

  imports: [
    RouterOutlet,
    ProductListComponent,
    ProductFormComponent
  ],

  standalone: true,

  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular18_crud';

}
```

### 4. Ahora lo agregamos al HTML

Abre:

```text
src/app/app.component.html
```

Y justo después de:

```html
<app-product-list></app-product-list>
```

agrega:

```html
<app-product-form></app-product-form>
```

Te debería quedar:

```html
<div class="min-h-screen bg-slate-950 flex items-center justify-center">

  <div class="text-center">

    <h1 class="text-5xl font-bold text-white">
      Angular 18 CRUD
    </h1>

    <app-product-list></app-product-list>

    <app-product-form></app-product-form>

    <p class="mt-4 text-lg text-slate-400">
      Angular Evolution Lab
    </p>

  </div>

</div>

<router-outlet />
```

### 🧠 Lo importante aquí

Estamos viendo una característica fundamental de los **Standalone Components** de Angular 18.

`AppComponent` declara explícitamente qué componentes puede utilizar:

```ts
imports: [
  ProductListComponent,
  ProductFormComponent
]
```

Y luego podemos utilizarlos directamente en el template:

```html
<app-product-list></app-product-list>

<app-product-form></app-product-form>
```

No estamos creando un `AppModule` ni agregando componentes a un `declarations`.

Esto será especialmente interesante cuando comparemos Angular 18 → 19 → 20 → 21 → 22.

---

Guarda ambos archivos y comprueba que ahora aparecen **la tabla de productos y el formulario**.

Todavía **no conectaremos el botón**. Primero quiero que confirmemos que el formulario aparece y que `ngModel` realmente está modificando nuestro objeto `product`.


---


Perfecto 🔥. Ahora sí vamos a darle **vida al botón "Agregar producto"**.

Hasta ahora tenemos:

```text
Formulario
├── name          → product.name        ✅
├── description   → product.description ✅
├── price         → product.price       ✅
└── stock         → product.stock       ✅

Botón "Agregar producto" → todavía no hace nada ⏳
```

## 4. Conectar el formulario con `ProductService`

La idea será:

```text
ProductFormComponent
        │
        │ addProduct()
        ▼
  ProductService
        │
        ▼
    products[]
```

### Primero: modifica `product-form.component.ts`

Abre:

```text
src/app/components/product-form/product-form.component.ts
```

Agrega el servicio:

```ts
import { ProductService } from '../../services/product.service';
```

Y modifica la clase para inyectarlo:

```ts
export class ProductFormComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(private productService: ProductService) {}

}
```

Hasta aquí **no hemos agregado lógica todavía**. Solo estamos haciendo que el componente tenga acceso a `ProductService`.

### Ahora agregamos `addProduct()`

Debajo del constructor:

```ts
addProduct(): void {
  this.productService.addProduct(this.product);

  this.product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };
}
```

Tu archivo completo debería quedar:

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.addProduct(this.product);

    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };
  }

}
```

### 🧠 ¿Qué está pasando?

Esta línea:

```ts
this.productService.addProduct(this.product);
```

llama al método que ya tenemos:

```ts
addProduct(product: Product): void {
  this.products.push(product);
}
```

Por lo tanto:

```text
Formulario
   ↓
product
   ↓
ProductService.addProduct()
   ↓
products.push(product)
```

Y después hacemos:

```ts
this.product = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0
};
```

para **limpiar el formulario**.

⚠️ Hay un pequeño problema que vamos a resolver inmediatamente después: estamos usando `id: 0` para todos los productos nuevos. Eso significa que todavía necesitamos implementar la generación de IDs.

Pero **no lo hagamos todavía**.

Primero guarda este archivo y dime si **compila sin errores**.


---


Perfecto 😎. Ahora conectamos **el botón con `addProduct()`**. Es un paso pequeño, pero aquí vamos a ver una cosa importante de Angular: **event binding**.

### 5. Conectar el botón

Abre:

```text
src/app/components/product-form/product-form.component.html
```

Actualmente tienes el botón:

```html
<button
  type="button"
  class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
>
  Agregar producto
</button>
```

Agrega `(click)`:

```html
<button
  type="button"
  (click)="addProduct()"
  class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
>
  Agregar producto
</button>
```

### 🧠 ¿Qué significa `(click)`?

Esta sintaxis:

```html
(click)="addProduct()"
```

es **event binding**.

Le estamos diciendo a Angular:

> "Cuando ocurra un evento `click` sobre este botón, ejecuta el método `addProduct()` del componente."

Es decir:

```text
Usuario hace click
       ↓
(click)
       ↓
addProduct()
       ↓
ProductService.addProduct()
       ↓
products[]
```

### 🧪 Pero hay algo importante

Guarda y prueba crear un producto, por ejemplo:

```text
Nombre:      Audífonos
Descripción: Audífonos inalámbricos
Precio:      79990
Stock:       12
```

Pulsa **Agregar producto**.

**Puede que el formulario se limpie pero la tabla no muestre el producto nuevo.**

Y eso sería completamente normal con nuestra implementación actual. 😏

¿Por qué?

Porque `ProductListComponent` tiene:

```ts
products: Product[];

constructor(private productService: ProductService) {
  this.products = this.productService.getProducts();
}
```

Eso obtiene la referencia inicialmente, pero nuestro `deleteProduct()` hace algo diferente:

```ts
this.products = this.products.filter(...);
```

y además todavía no tenemos ningún mecanismo para avisarle al componente de lista que se agregó un producto.

**Ese será nuestro próximo concepto: comunicación entre componentes (`@Output`)**, que es precisamente una de las cosas que queremos estudiar en este laboratorio de evolución de Angular.

Primero prueba el botón y dime **qué ocurre exactamente con la tabla y el formulario**.


---


JAJAJA 😂🔥 **¡Y eso es justamente lo interesante!**

Acabamos de construir un CRUD funcional en Angular 18 prácticamente con lo esencial:

```text
                    ProductService
                         │
              ┌──────────┴──────────┐
              │                     │
        products[]             métodos CRUD
              │                     │
       ┌──────┴──────┐       ┌──────┴──────┐
       │             │       │             │
 ProductList    ProductForm  get/add    update/delete
       │             │
       └──────┬──────┘
              │
          AppComponent
```

Y hay una razón por la que **el producto nuevo aparece sin que hayamos creado todavía un `@Output()`**.

### 🧠 La pequeña "trampa" interesante

Nuestro servicio tiene:

```ts
private products: Product[] = [
  // ...
];
```

Y `getProducts()` devuelve directamente **la misma referencia del array**:

```ts
getProducts(): Product[] {
  return this.products;
}
```

Cuando hacemos:

```ts
addProduct(product: Product): void {
  this.products.push(product);
}
```

estamos modificando **ese mismo array**.

Por eso el `ProductListComponent` puede terminar viendo el producto nuevo sin que hayamos implementado comunicación explícita entre componentes.

---

### Pero aquí aparece algo que quiero que estudiemos

Tenemos una inconsistencia:

**Agregar:**

```ts
this.products.push(product);
```

Modifica el array existente.

**Eliminar:**

```ts
this.products = this.products.filter(p => p.id !== id);
```

Crea un array completamente nuevo.

Y además tenemos:

```ts
products: Product[];
```

en el componente.

Esto nos da una excelente oportunidad para aprender **por qué la detección de cambios y las referencias de objetos importan en Angular**.

Pero antes de meternos en eso...

## 🚨 Nos falta algo fundamental: IDs

Actualmente nuestro formulario crea:

```ts
{
  id: 0,
  name: 'Audífonos',
  ...
}
```

Así que si agregamos:

```text
Audífonos
Teclado
Monitor
Mouse
```

todos los nuevos productos tendrán:

```text
id = 0
```

Y eso obviamente nos va a romper el CRUD cuando empecemos a editar/eliminar correctamente.

### Próximo paso

Vamos a modificar **únicamente `ProductService`** para que genere automáticamente:

```text
1
2
3
4 ← nuevo
5 ← nuevo
...
```

sin backend y sin base de datos.

Y aquí quiero hacerlo de forma **didáctica**, no simplemente copiar una solución: vamos a entender por qué necesitamos generar el ID en el servicio y no en el formulario.

Dime **"vamos con los IDs"** y seguimos. 😎


---


¡Vamos! 😎 Este es un buen momento para ordenar una responsabilidad importante: **el formulario recopila datos; el servicio administra los productos y sus IDs**.

## 6. Generar IDs automáticamente

Vamos a modificar solamente:

```text
src/app/services/product.service.ts
```

Actualmente tenemos:

```ts
addProduct(product: Product): void {
  this.products.push(product);
}
```

El problema es que estamos recibiendo el producto con:

```ts
id: 0
```

Así que el servicio debería asignarle un ID antes de guardarlo.

### Paso 1 — Agregar un contador

Dentro de `ProductService`, justo antes del array `products`, agrega:

```ts
private nextId = 4;
```

¿Por qué `4`?

Porque nuestros datos iniciales son:

```text
1 → Teclado
2 → Mouse
3 → Monitor
```

Por lo tanto, el siguiente ID disponible es `4`.

---

### Paso 2 — Modificar `addProduct()`

Cambia:

```ts
addProduct(product: Product): void {
  this.products.push(product);
}
```

por:

```ts
addProduct(product: Product): void {
  product.id = this.nextId;

  this.nextId++;

  this.products.push(product);
}
```

Ahora el flujo será:

```text
Formulario
   │
   │ product.id = 0
   ▼
ProductService
   │
   ├── product.id = 4
   ├── nextId = 5
   │
   ▼
products[]
```

El siguiente producto recibirá `5`, después `6`, etc.

---

## Así debería quedar la parte importante del servicio

```ts
export class ProductService {

  private nextId = 4;

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
    product.id = this.nextId;

    this.nextId++;

    this.products.push(product);
  }

  // ...
}
```

### 🧠 Algo importante para nuestro laboratorio

Esta implementación es **deliberadamente sencilla**.

En una aplicación real con backend, normalmente **no confiaríamos en Angular para generar el ID definitivo**. La base de datos sería la responsable de generar la identidad del registro.

Pero como nuestro CRUD es **100% en memoria**, necesitamos simular ese comportamiento.

Y además estamos aprendiendo Angular, así que esta solución nos permite concentrarnos en la evolución del framework sin meter todavía un backend.

---

### 🧪 Ahora prueba

Guarda el servicio y agrega dos productos:

```text
Producto A
Producto B
```

Deberías obtener:

```text
ID  Producto
1   Teclado mecánico
2   Mouse gamer
3   Monitor 27"
4   Producto A
5   Producto B
```

Y elimina, por ejemplo, el `Producto A`.

Luego agrega otro:

```text
6   Producto C
```

**No debería reutilizar el ID `4`**.

Eso también es intencional: nuestro contador representa el siguiente ID generado, no el menor ID disponible.

Haz esa prueba y dime si te queda `4, 5, 6` correctamente.


---


¡Excelente! 🔥 Ya tenemos **Create + Read + Delete + Search** funcionando en Angular 18.

Ahora, siguiendo el objetivo del laboratorio, yo haría **Update/Edit** antes de meternos en conceptos más avanzados. Así dejamos el CRUD completo.

## 📊 Estado actual

```text
Angular 18 CRUD

├── Read       ✅ Listar productos
├── Create     ✅ Crear productos
├── Delete     ✅ Eliminar productos
├── Search     ✅ Buscar productos
└── Update     ⏳ Editar productos
```

Y aquí aparece algo muy interesante para nuestra comparación entre Angular 18 → 22:

### 🧩 Vamos a introducir comunicación entre componentes

Actualmente tenemos:

```text
AppComponent
   │
   ├── ProductListComponent
   │
   └── ProductFormComponent
```

El formulario sabe crear productos.

La lista sabe mostrar y eliminar productos.

Pero ahora necesitamos que ocurra algo como:

```text
ProductListComponent
        │
        │ "quiero editar este producto"
        ▼
ProductFormComponent
        │
        │ "actualiza este producto"
        ▼
ProductService
```

Y aquí vamos a introducir **`@Input()` y `@Output()`**, que son fundamentales para entender el Angular clásico.

---

# 🚀 Próximo paso: Editar productos

Lo vamos a construir en pequeñas etapas:

### Paso 1

Agregar `updateProduct()` al servicio.

### Paso 2

Agregar un botón **Editar** a cada fila.

### Paso 3

Hacer que `ProductListComponent` comunique qué producto queremos editar.

Aquí aparecerá:

```ts
@Output()
```

### Paso 4

Hacer que `ProductFormComponent` reciba el producto:

```ts
@Input()
```

### Paso 5

Reutilizar **el mismo formulario** para:

```text
Crear producto
        ↓
Editar producto
```

### Paso 6

Cambiar dinámicamente:

```text
Agregar producto
```

por:

```text
Actualizar producto
```

---

Y esto nos deja en una posición **perfecta para nuestro objetivo de estudiar la evolución de Angular**.

Porque después podremos comparar:

```text
Angular 18
@Input()
@Output()
constructor injection
*ngFor
*ngIf
[(ngModel)]

       ↓

Angular moderno

input()
output()
inject()
@for
@if
Signals
...
```

No vamos a saltarnos lo antiguo. **Queremos ver cómo evolucionó.**

Así que el siguiente paso concreto es:

> **Agregar `updateProduct()` a `ProductService`.**

Si quieres seguimos con ese paso ahora mismo.


---


¡Vamos! 😎 Este paso es cortito, pero importante porque vamos a completar la lógica del **Update** en nuestro servicio antes de tocar los componentes.

## 7. Agregar `updateProduct()` al `ProductService`

Abre:

```text
src/app/services/product.service.ts
```

Ya tienes este método:

```ts
updateProduct(product: Product): void {
  const index = this.products.findIndex(p => p.id === product.id);

  if (index !== -1) {
    this.products[index] = product;
  }
}
```

Si **ya lo tienes exactamente así**, entonces en realidad este paso ya está hecho. 😅

### Si no lo tienes

Agrégalo después de `addProduct()`:

```ts
updateProduct(product: Product): void {
  const index = this.products.findIndex(p => p.id === product.id);

  if (index !== -1) {
    this.products[index] = product;
  }
}
```

### 🧠 ¿Qué hace?

Primero busca el producto por ID:

```ts
const index = this.products.findIndex(
  p => p.id === product.id
);
```

Por ejemplo, si queremos actualizar:

```ts
{
  id: 4,
  name: 'Teclado Logitech',
  description: 'Teclado inalámbrico',
  price: 69990,
  stock: 10
}
```

`findIndex()` busca dónde está el producto con:

```text
id === 4
```

Si encuentra:

```text
index = 3
```

entonces:

```ts
this.products[index] = product;
```

reemplaza el producto completo.

---

### 🛡️ ¿Y este `if`?

```ts
if (index !== -1)
```

`findIndex()` devuelve:

```text
0, 1, 2, 3...   → encontró el producto
-1              → no lo encontró
```

Por eso evitamos intentar modificar una posición inexistente.

---

## 📌 Nuestro `ProductService` ya tiene el CRUD

Ahora conceptualmente tenemos:

```text
getProducts()      → READ
addProduct()       → CREATE
updateProduct()    → UPDATE
deleteProduct()    → DELETE
```

🔥 **Servicio CRUD completo.**

Pero todavía no podemos editar desde la interfaz.

### Tu tarea ahora

Comprueba que `updateProduct()` esté en el servicio exactamente como arriba y que el proyecto siga compilando.

**No cambiemos todavía `ProductListComponent`.**

Cuando me confirmes que compila, pasamos al siguiente paso: **agregar el botón "Editar" a cada producto**.


---


¡Esooo! 🔥 Ahora sí vamos a empezar a conectar los componentes.

## 8. Agregar el botón "Editar"

Primero hagamos algo sencillo: **el botón solamente va a decirle a `ProductListComponent` qué producto quiere editar**.

Todavía no vamos a tocar `@Input()` ni `@Output()`. Primero construimos la acción.

Abre:

```text
src/app/components/product-list/product-list.component.html
```

Actualmente tienes en la columna **Acciones** algo parecido a:

```html
<td class="px-6 py-4">
  <button
    type="button"
    class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
    (click)="deleteProduct(product.id)"
  >
    Eliminar
  </button>
</td>
```

Vamos a agregar **Editar** junto a Eliminar:

```html
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
```

### 🧠 ¿Qué estamos haciendo?

Antes teníamos:

```html
(click)="deleteProduct(product.id)"
```

Le pasamos solamente el ID porque para eliminar nos basta con saber:

```text
¿Qué producto elimino?
→ ID
```

Pero para editar queremos trabajar con **el producto completo**:

```html
(click)="editProduct(product)"
```

Así nuestro método recibirá:

```ts
editProduct(product: Product)
```

y tendrá acceso a:

```text
product.id
product.name
product.description
product.price
product.stock
```

---

## 9. Crear `editProduct()` en el componente

Ahora abre:

```text
src/app/components/product-list/product-list.component.ts
```

Debajo de `deleteProduct()` agrega:

```ts
editProduct(product: Product): void {

}
```

Por ahora déjalo vacío.

Tu componente tendrá conceptualmente:

```ts
deleteProduct(id: number): void {
  this.productService.deleteProduct(id);

  this.products = this.productService.getProducts();
}

editProduct(product: Product): void {

}
```

### ¿Por qué lo dejamos vacío?

Porque aquí empieza la parte interesante.

Tenemos:

```text
┌──────────────────────┐
│ ProductListComponent │
│                      │
│ Producto seleccionado│
│         ↓            │
│    editProduct()     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ ProductFormComponent │
│                      │
│ necesita recibirlo   │
└──────────────────────┘
```

Y para hacer esa comunicación entre componentes vamos a introducir **`@Output()`**.

Después utilizaremos **`@Input()`** para enviar el producto al formulario.

Ese es justamente el patrón clásico de Angular que queremos aprender antes de llegar a `output()` e `input()` en las versiones modernas.

---

### 🧪 Prueba

Guarda los dos archivos.

La tabla debería mostrar:

```text
Acciones

[Editar] [Eliminar]
```

Si haces click en **Editar**, obviamente todavía no pasará nada porque `editProduct()` está vacío. **Eso es esperado.**

Confírmame que ves ambos botones y seguimos con **`@Output()`**.


---


Perfecto 😎. Ahora llegamos a una de las partes **más importantes de Angular clásico**: comunicación entre componentes padre e hijo.

## 9. `@Output()`: ProductList → AppComponent

Primero entendamos nuestra estructura:

```text
AppComponent
├── ProductListComponent
└── ProductFormComponent
```

Los dos son **hermanos**.

Por eso `ProductListComponent` no debería intentar modificar directamente el `ProductFormComponent`.

La comunicación será:

```text
ProductListComponent
        │
        │ @Output()
        ▼
   AppComponent
        │
        │ @Input()
        ▼
ProductFormComponent
```

Esto es muy importante: **los componentes hermanos no se pasan datos directamente entre ellos**. Usamos al padre como intermediario.

---

# Paso 1 — Crear el `@Output()`

Abre:

```text
src/app/components/product-list/product-list.component.ts
```

Actualmente tienes:

```ts
import { Component } from '@angular/core';
```

Vamos a importar `EventEmitter` y `Output`.

Cámbialo por:

```ts
import { Component, EventEmitter, Output } from '@angular/core';
```

Y dentro de la clase, antes de `products`, agrega:

```ts
@Output() edit = new EventEmitter<Product>();
```

Te debería quedar esta parte así:

```ts
export class ProductListComponent {

  @Output() edit = new EventEmitter<Product>();

  products: Product[];

  searchTerm = '';

  // ...
}
```

### 🧠 ¿Qué significa esto?

Estamos creando un evento llamado:

```ts
edit
```

que puede emitir un objeto:

```ts
Product
```

Por eso:

```ts
EventEmitter<Product>
```

significa:

> "Este componente puede emitir eventos cuyo valor será un `Product`."

---

# Paso 2 — Emitir el producto

Ahora tenemos nuestro método:

```ts
editProduct(product: Product): void {

}
```

Lo vamos a cambiar a:

```ts
editProduct(product: Product): void {
  this.edit.emit(product);
}
```

Entonces el flujo queda:

```text
Usuario pulsa "Editar"
          ↓
editProduct(product)
          ↓
this.edit.emit(product)
          ↓
ProductListComponent
          │
          ▼
      @Output()
```

El componente acaba de decir:

> "¡Oye, AppComponent! El usuario quiere editar este producto."

---

## Paso 3 — ¿Quién recibe ese evento?

Todavía **nadie** 😂.

Y eso está bien.

En el próximo paso vamos a modificar:

```text
src/app/app.component.html
```

para escuchar el evento:

```html
(edit)="..."
```

y ahí podremos pasar el producto seleccionado hacia `ProductFormComponent`.

---

### 📌 Por ahora

Tu `ProductListComponent` debería tener:

```ts
import { Component, EventEmitter, Output } from '@angular/core';
```

y:

```ts
@Output() edit = new EventEmitter<Product>();
```

y:

```ts
editProduct(product: Product): void {
  this.edit.emit(product);
}
```

Guarda y verifica que **compile sin errores**.

Cuando esté listo, seguimos con el siguiente paso: **escuchar ese `@Output()` desde `AppComponent`**. 🔥


---


¡Vamos! 🔥 Ahora veremos la otra mitad del `@Output()`: **el padre escucha el evento del hijo**.

Tenemos:

```text
ProductListComponent
       │
       │ edit.emit(product)
       ▼
 AppComponent
```

## 10. Escuchar el `@Output()` desde `AppComponent`

### Paso 1 — Crear una propiedad en `AppComponent`

Abre:

```text
src/app/app.component.ts
```

Necesitamos importar `Product`:

```ts
import { Product } from './models/product.model';
```

Y dentro de `AppComponent`, agrega:

```ts
selectedProduct: Product | null = null;
```

Te quedará aproximadamente:

```ts
export class AppComponent {

  title = 'angular18_crud';

  selectedProduct: Product | null = null;

}
```

### ¿Por qué `Product | null`?

Porque inicialmente **no estamos editando ningún producto**.

```text
selectedProduct = null
```

Cuando el usuario pulse:

```text
Editar → Teclado
```

pasará a contener:

```ts
selectedProduct = {
  id: 1,
  name: 'Teclado mecánico',
  ...
};
```

---

## Paso 2 — Crear el método receptor

Debajo de la propiedad agrega:

```ts
onEditProduct(product: Product): void {
  this.selectedProduct = product;
}
```

Ahora tenemos:

```ts
export class AppComponent {

  title = 'angular18_crud';

  selectedProduct: Product | null = null;

  onEditProduct(product: Product): void {
    this.selectedProduct = product;
  }

}
```

Este método será el que reciba el evento que emite `ProductListComponent`.

---

# Paso 3 — Escuchar el evento en `app.component.html`

Ahora abre:

```text
src/app/app.component.html
```

Actualmente tienes:

```html
<app-product-list></app-product-list>
```

Cámbialo por:

```html
<app-product-list
  (edit)="onEditProduct($event)"
></app-product-list>
```

### 🧠 Esta línea es MUY importante

```html
(edit)="onEditProduct($event)"
```

Aquí estamos diciendo:

> "Cuando `ProductListComponent` emita su evento `edit`, ejecuta `onEditProduct()`."

Y:

```text
$event
```

contiene exactamente el `Product` que enviamos desde:

```ts
this.edit.emit(product);
```

Por lo tanto:

```text
ProductListComponent
        │
        │ this.edit.emit(product)
        ▼
      (edit)
        │
        │ $event = product
        ▼
onEditProduct($event)
        │
        ▼
selectedProduct
```

🔥 Este es uno de los patrones fundamentales de Angular.

---

## 🧪 Por ahora NO esperes ver cambios

Si haces click en **Editar**, visualmente probablemente no ocurrirá nada.

Eso es normal.

Acabamos de conseguir esto:

```text
[Editar]
   ↓
ProductListComponent
   ↓ @Output
AppComponent
   ↓
selectedProduct
```

Pero todavía **no hemos enviado `selectedProduct` al formulario**.

Ese será el siguiente paso, utilizando:

```ts
@Input()
```

Y ahí finalmente veremos cómo el formulario puede recibir el producto que queremos editar.

Guarda ambos archivos y dime si **compila sin errores**.


---


¡Perfecto! 😎 Ahora cerramos el circuito con **`@Input()`**.

Hasta ahora tenemos:

```text
ProductListComponent
       │
       │ @Output()
       ▼
 AppComponent
       │
       │ selectedProduct
       ▼
ProductFormComponent   ← falta esto
```

## 11. `@Input()` para recibir el producto

Abre:

```text
src/app/components/product-form/product-form.component.ts
```

### Paso 1 — Importar `Input`

Actualmente tienes:

```ts
import { Component } from '@angular/core';
```

Cámbialo a:

```ts
import { Component, Input } from '@angular/core';
```

### Paso 2 — Crear el `@Input()`

Dentro de `ProductFormComponent`, agrega:

```ts
@Input() productToEdit: Product | null = null;
```

Por ahora tu clase debería verse así:

```ts
export class ProductFormComponent {

  @Input() productToEdit: Product | null = null;

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.addProduct(this.product);

    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };
  }

}
```

### 🧠 ¿Por qué tenemos dos propiedades?

Esto es importante.

Tenemos:

```ts
@Input() productToEdit
```

que representa:

> "El producto que el padre me está enviando para editar."

Y:

```ts
product
```

que representa:

> "Los datos que actualmente está manejando mi formulario."

No queremos mezclar ambos conceptos todavía.

---

# Paso 3 — Pasarle el producto desde `AppComponent`

Ahora abre:

```text
src/app/app.component.html
```

Actualmente tienes:

```html
<app-product-form></app-product-form>
```

Cámbialo por:

```html
<app-product-form
  [productToEdit]="selectedProduct"
></app-product-form>
```

Aquí aparece otra sintaxis fundamental:

```html
[productToEdit]="selectedProduct"
```

Esto es **property binding**.

Estamos diciendo:

> "La propiedad `productToEdit` del componente hijo debe recibir el valor de `selectedProduct` del padre."

Por lo tanto:

```text
AppComponent
────────────────────────
selectedProduct
      │
      │ [productToEdit]
      ▼
ProductFormComponent
────────────────────────
productToEdit
```

---

## 🔥 Y ahora tenemos el circuito completo

```text
Usuario
  │
  │ click "Editar"
  ▼
ProductListComponent
  │
  │ @Output()
  │ edit.emit(product)
  ▼
AppComponent
  │
  │ selectedProduct
  │
  │ [productToEdit]
  ▼
ProductFormComponent
```

Pero ojo 👀:

**todavía no hemos hecho que el formulario copie `productToEdit` dentro de `product`.**

Por eso si ahora haces click en Editar, el formulario **todavía no se va a rellenar**.

Eso será el siguiente paso.

### Por ahora

Guarda:

```text
product-form.component.ts
app.component.html
```

y confirma que **compila sin errores**.

Después hacemos que el formulario detecte el producto recibido y se rellene automáticamente.


---


¡Perfecto! 🔥 Ahora viene una parte muy buena: **hacer que el formulario reaccione cuando recibe un producto**.

Tenemos el `@Input()`:

```ts
@Input() productToEdit: Product | null = null;
```

pero actualmente no hace nada con él.

## 12. Detectar cambios en `@Input()`

En Angular 18, una forma clásica de hacerlo es mediante el ciclo de vida **`ngOnChanges`**.

### 1. Importar `OnChanges` y `SimpleChanges`

En:

```text
src/app/components/product-form/product-form.component.ts
```

cambia:

```ts
import { Component, Input } from '@angular/core';
```

por:

```ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
```

Y cambia:

```ts
export class ProductFormComponent {
```

por:

```ts
export class ProductFormComponent implements OnChanges {
```

---

### 2. Agregar `ngOnChanges()`

Debajo del constructor agrega:

```ts
ngOnChanges(changes: SimpleChanges): void {
  if (changes['productToEdit'] && this.productToEdit) {
    this.product = { ...this.productToEdit };
  }
}
```

Tu componente debería quedar así:

```ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  @Input() productToEdit: Product | null = null;

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productToEdit'] && this.productToEdit) {
      this.product = { ...this.productToEdit };
    }
  }

  addProduct(): void {
    this.productService.addProduct(this.product);

    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0
    };
  }

}
```

### 🧠 Hay dos conceptos importantes aquí

Primero:

```ts
implements OnChanges
```

le dice a TypeScript/Angular que nuestro componente implementa el ciclo de vida `ngOnChanges()`.

Angular ejecutará ese método cuando cambien nuestros `@Input()`.

Segundo, fíjate en esto:

```ts
this.product = { ...this.productToEdit };
```

No hacemos:

```ts
this.product = this.productToEdit;
```

porque eso haría que ambas variables apuntaran al **mismo objeto**.

Con:

```ts
{ ...this.productToEdit }
```

creamos una copia superficial del producto.

Por ahora esto es suficiente porque nuestro `Product` solamente contiene valores primitivos:

```ts
id: number
name: string
description: string
price: number
stock: number
```

---

## 🧪 Ahora viene la prueba

Guarda y asegúrate de que compile.

Después:

1. Busca el producto **Teclado mecánico**.
    
2. Pulsa **Editar**.
    
3. Mira el formulario.
    

### ¿Qué esperamos?

El formulario debería rellenarse automáticamente:

```text
Nombre:
Teclado mecánico

Descripción:
Teclado mecánico RGB

Precio:
59990

Stock:
15
```

**Pero todavía NO pulses "Actualizar".**

De hecho, el botón todavía dice:

```text
Agregar producto
```

y `addProduct()` todavía crearía un producto nuevo.

Eso lo arreglaremos inmediatamente después.

Primero quiero confirmar que conseguimos algo fundamental:

> **`@Output()` → padre → `@Input()` → formulario rellenado.**

Prueba el botón **Editar** y dime si el formulario se rellena con los datos del producto.


---


¡Excelente! 🔥 Entonces ya tenemos funcionando el patrón clásico completo:

```text
@Output() → AppComponent → @Input()
```

Ahora vamos a convertir el formulario en un formulario **Create + Update**, reutilizando el mismo componente.

## 13. Crear el modo edición

Hasta ahora el formulario siempre ejecuta:

```ts
addProduct()
```

Necesitamos que sepa si está:

```text
🟢 Creando → addProduct()
🔵 Editando → updateProduct()
```

### Paso 1 — Agregar una propiedad `isEditing`

En:

```text
src/app/components/product-form/product-form.component.ts
```

debajo de `productToEdit`, agrega:

```ts
isEditing = false;
```

Te queda:

```ts
@Input() productToEdit: Product | null = null;

isEditing = false;
```

---

### Paso 2 — Modificar `ngOnChanges()`

Actualmente tienes:

```ts
ngOnChanges(changes: SimpleChanges): void {
  if (changes['productToEdit'] && this.productToEdit) {
    this.product = { ...this.productToEdit };
  }
}
```

Cámbialo por:

```ts
ngOnChanges(changes: SimpleChanges): void {
  if (changes['productToEdit'] && this.productToEdit) {
    this.product = { ...this.productToEdit };
    this.isEditing = true;
  }
}
```

Ahora cuando llegue un producto mediante `@Input()`:

```text
productToEdit ≠ null
        ↓
product = copia del producto
        ↓
isEditing = true
```

---

### Paso 3 — Crear `updateProduct()`

Debajo de `addProduct()` agrega:

```ts
updateProduct(): void {
  this.productService.updateProduct(this.product);
}
```

Por ahora **no vamos a limpiar el formulario ni salir del modo edición**. Primero hagamos que la actualización funcione.

Tu clase tendrá conceptualmente:

```ts
addProduct(): void {
  this.productService.addProduct(this.product);

  this.product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };
}

updateProduct(): void {
  this.productService.updateProduct(this.product);
}
```

---

## Paso 4 — Cambiar el botón dinámicamente

Ahora abre:

```text
src/app/components/product-form/product-form.component.html
```

Actualmente tienes:

```html
<button
  type="button"
  (click)="addProduct()"
  class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
>
  Agregar producto
</button>
```

Vamos a aprovechar Angular 18 y su `*ngIf`.

Primero, como `*ngIf` pertenece a `CommonModule`, tenemos que agregarlo a los imports del componente.

En `product-form.component.ts`, cambia:

```ts
imports: [FormsModule],
```

por:

```ts
imports: [FormsModule, CommonModule],
```

y arriba agrega:

```ts
import { CommonModule } from '@angular/common';
```

Luego podemos hacer el botón dinámico.

Reemplaza el botón por:

```html
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
```

### 🧠 Lo que estamos aprendiendo aquí

Esta parte:

```html
*ngIf="!isEditing"
```

significa:

> muestra este elemento cuando **no** estamos editando.

Mientras que:

```html
*ngIf="isEditing"
```

significa:

> muestra este elemento cuando **sí** estamos editando.

Por lo tanto:

```text
isEditing = false
        ↓
[Agregar producto]

isEditing = true
        ↓
[Actualizar producto]
```

Esto es **Angular 18 clásico**, y precisamente después podremos comparar este `*ngIf` con el control flow moderno:

```text
@if
```

---

### 🧪 Prueba ahora

1. Guarda.
    
2. Verifica que compile.
    
3. Pulsa **Editar** sobre un producto.
    
4. Modifica, por ejemplo, el precio.
    
5. Debería aparecer **Actualizar producto**.
    
6. Pulsa el botón.
    

Por ahora puede ocurrir algo importante: **el servicio actualizará el producto, pero la tabla podría no reflejar inmediatamente el cambio**.

Si sucede, perfecto. **No lo arregles todavía.** Ese será nuestro siguiente pequeño problema y nos permitirá entender nuevamente las referencias y la comunicación entre componentes. 😎


---


¡Perfecto! 😎 Y lo que estás viendo nos viene **de lujo para el laboratorio**, porque acabamos de encontrar dos comportamientos distintos que vale la pena entender.

### Tenemos dos cosas que corregir

1. **Después de actualizar**, el formulario debería volver al modo creación y limpiarse.
    
2. **Si la tabla cambia mientras escribes antes de presionar "Actualizar"**, tenemos una referencia compartida que debemos revisar. Con el código que construimos, eso **no debería ocurrir**, porque hicimos una copia con `{ ...this.productToEdit }`.
    

Vamos primero con el punto 1, y después comprobamos el segundo.

---

# 14. Limpiar el formulario después de actualizar

En `product-form.component.ts`, modifica `updateProduct()`.

Actualmente:

```ts
updateProduct(): void {
  this.productService.updateProduct(this.product);
}
```

Déjalo así:

```ts
updateProduct(): void {
  this.productService.updateProduct(this.product);

  this.product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  this.isEditing = false;
}
```

Ahora el flujo será:

```text
Actualizar
    ↓
updateProduct()
    ↓
ProductService
    ↓
limpiar product
    ↓
isEditing = false
    ↓
aparece nuevamente "Agregar producto"
```

Pero hay un detalle: **`AppComponent` todavía tiene `selectedProduct` apuntando al producto que editamos**.

Así que vamos a solucionarlo correctamente.

---

# 15. Avisarle al padre que terminamos

Este es otro buen ejemplo de `@Output()`.

En `product-form.component.ts`, importa `EventEmitter` y `Output`.

Cambia:

```ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
```

por:

```ts
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
```

Luego, debajo de:

```ts
@Input() productToEdit: Product | null = null;
```

agrega:

```ts
@Output() saved = new EventEmitter<void>();
```

Ahora modifica `updateProduct()`:

```ts
updateProduct(): void {
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
```

### 🧠 ¿Qué estamos haciendo?

El formulario ahora puede decirle al padre:

> "Terminé de guardar la modificación."

```text
ProductFormComponent
        │
        │ saved.emit()
        ▼
 AppComponent
```

---

# 16. Escuchar `saved` desde `AppComponent`

En:

```text
src/app/app.component.html
```

Actualmente tienes:

```html
<app-product-form
  [productToEdit]="selectedProduct"
></app-product-form>
```

Cámbialo por:

```html
<app-product-form
  [productToEdit]="selectedProduct"
  (saved)="onProductSaved()"
></app-product-form>
```

Ahora vamos a crear ese método.

En:

```text
src/app/app.component.ts
```

agrega:

```ts
onProductSaved(): void {
  this.selectedProduct = null;
}
```

Entonces:

```text
Editar
  ↓
selectedProduct = producto
  ↓
Formulario recibe producto
  ↓
Usuario modifica
  ↓
Actualizar
  ↓
ProductService.updateProduct()
  ↓
saved.emit()
  ↓
onProductSaved()
  ↓
selectedProduct = null
  ↓
Formulario vuelve a creación
```

---

## ⚠️ Y ahora viene el detalle que mencionaste

Dijiste:

> "si actualizo en los cambios se reflejan de inmediato sin necesidad de apretar el botón"

**Eso quiero que lo comprobemos antes de modificar más código.**

Con nuestro:

```ts
this.product = { ...this.productToEdit };
```

el formulario debería tener una copia independiente.

Haz esta prueba:

1. Recarga la aplicación.
    
2. Pulsa **Editar** en un producto.
    
3. Cambia solamente el nombre.
    
4. **NO pulses Actualizar.**
    
5. Mira la tabla.
    

### Si la tabla cambia inmediatamente

Pásame el contenido actual de estos **dos archivos**:

```text
src/app/components/product-form/product-form.component.ts
src/app/components/product-list/product-list.component.ts
```

Porque ahí tenemos una referencia compartida que no corresponde con la copia que implementamos.

### Si la tabla NO cambia

Perfecto. Entonces lo que probablemente viste fue el comportamiento **después de presionar Actualizar**, que sí es correcto: el servicio reemplaza el producto y la tabla refleja el cambio.

Haz primero esa prueba. **No cambiemos nada más hasta confirmar cuál de los dos casos tenemos.** 😎


---


¡Ahhh, ahora sí! 😂 Te entendí perfecto. Y de hecho **lo que viste tiene una explicación muy buena**.

Lo que ocurría era esto:

```text
Tabla
  │
  │ product
  ▼
ProductListComponent
  │
  │ @Output()
  ▼
AppComponent
  │
  │ selectedProduct
  ▼
ProductFormComponent
```

Cuando editábamos, hacíamos:

```ts
this.product = { ...this.productToEdit };
```

Eso crea una copia, así que **los cambios del formulario no deberían modificar la tabla mientras escribes**.

Pero después de actualizar, `AppComponent` todavía conservaba:

```ts
selectedProduct
```

y el formulario seguía en modo edición. Entonces había un estado de edición que no estábamos limpiando correctamente.

Ahora que agregamos:

```ts
this.saved.emit();
```

y:

```ts
onProductSaved(): void {
  this.selectedProduct = null;
}
```

cerramos correctamente el ciclo:

```text
Editar
  ↓
Formulario recibe producto
  ↓
Modificar
  ↓
Actualizar
  ↓
Service actualiza
  ↓
saved.emit()
  ↓
selectedProduct = null
  ↓
Formulario vuelve a estado limpio
```

Y lo más importante: **no necesitamos perseguir aquel comportamiento anterior**, porque ya no podemos reproducirlo y la arquitectura actual está haciendo la separación correctamente.

---

# 🎯 Ahora tenemos el CRUD prácticamente completo

Nuestro estado queda:

```text
Angular 18 CRUD

CREATE  ✅
READ    ✅
UPDATE  ✅
DELETE  ✅
SEARCH  ✅
```

Y además ya estudiamos:

```text
Standalone Components     ✅
CommonModule              ✅
FormsModule               ✅
[(ngModel)]               ✅
Event Binding             ✅
Property Binding          ✅
@Input()                  ✅
@Output()                 ✅
EventEmitter              ✅
ngOnChanges()             ✅
constructor injection     ✅
```

Esto es **oro para nuestro objetivo del laboratorio**, porque estamos construyendo conscientemente un CRUD con patrones que nos permitirán comparar cómo Angular fue evolucionando.

---

## 🔥 Pero todavía nos falta una pequeña mejora

Ahora mismo tenemos una experiencia un poco rara:

```text
[Editar]
   ↓
formulario aparece con producto
   ↓
[Actualizar]
   ↓
formulario se limpia
```

Pero si el usuario se arrepiente de editar, **no existe un botón Cancelar**.

Yo agregaría ahora:

```text
[Actualizar] [Cancelar]
```

y al cancelar:

```text
isEditing = false
product = producto vacío
saved.emit()
```

Así cerramos correctamente el flujo de edición.

Después de eso, yo haría una **pausa técnica** y documentaría el Angular 18 CRUD antes de continuar con cosas nuevas. Así no solamente tenemos código funcionando: tenemos registrado **qué APIs y patrones de Angular 18 estamos usando y por qué**.

Luego podemos pasar a uno de los objetivos principales del laboratorio: **Angular 19**. 🚀


---


Sí, mi buen rey. **Cerremos Angular 18 con esas dos cosas** y después lo dejamos documentado antes de saltar a Angular 19.

Y sobre la validación: **sí conviene corregirla ahora**. No es una funcionalidad que debamos dejar pendiente para una versión posterior de Angular, porque el objetivo del laboratorio es que **cada CRUD sea funcional y razonablemente completo**. Más adelante podremos comparar _cómo_ cambia la forma de implementar formularios y validaciones, pero la regla de negocio —no permitir productos inválidos— debería existir desde Angular 18.

Vamos por partes:

1. **Agregar botón Cancelar durante edición.**
    
2. **Validar el formulario para impedir productos vacíos.**
    
3. Probar todo.
    
4. Documentar qué aprendimos en Angular 18.
    
5. Recién ahí pasamos a Angular 19.


---


¡Vamos, rey! 😎 Cerramos Angular 18 como corresponde.

## 1. Agreguemos primero el botón **Cancelar**

La idea será:

- Si estamos agregando → aparece **Agregar producto**.
    
- Si estamos editando → aparecen **Actualizar producto** y **Cancelar**.
    
- Cancelar **no modifica ningún producto**.
    
- Simplemente abandona la edición y limpia el formulario.
    

### Paso 1 — Agrega `cancelEdit()` al `ProductFormComponent`

En:

```text
src/app/components/product-form/product-form.component.ts
```

debajo de `updateProduct()` agrega:

```ts
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
```

La lógica es prácticamente la misma que después de actualizar, pero **sin llamar al servicio**.

---

### Paso 2 — Agregamos el botón al HTML

En:

```text
src/app/components/product-form/product-form.component.html
```

actualmente tienes el botón de actualizar:

```html
<button
  *ngIf="isEditing"
  type="button"
  (click)="updateProduct()"
  class="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
>
  Actualizar producto
</button>
```

Justo debajo agrega:

```html
<button
  *ngIf="isEditing"
  type="button"
  (click)="cancelEdit()"
  class="ml-2 rounded-lg bg-slate-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
>
  Cancelar
</button>
```

### ¿Qué estamos haciendo aquí?

Tenemos dos eventos distintos:

```text
Actualizar
    ↓
updateProduct()
    ↓
modifica el producto
    ↓
limpia formulario
    ↓
sale de modo edición
```

Mientras que:

```text
Cancelar
    ↓
cancelEdit()
    ↓
NO modifica el producto
    ↓
limpia formulario
    ↓
sale de modo edición
```

---

## 2. Probemos Cancelar

Ejecuta tu aplicación si no está corriendo:

```powershell
npm start
```

Luego:

1. Haz clic en **Editar** sobre un producto.
    
2. Cambia el nombre.
    
3. Cambia el precio.
    
4. Cambia el stock.
    
5. **No presiones Actualizar.**
    
6. Presiona **Cancelar**.
    

Debería ocurrir esto:

```text
Formulario → vacío
Modo → Agregar producto
Tabla → exactamente igual que antes
```

Haz esa prueba primero.

Cuando confirmes que **Cancelar funciona**, pasamos a la segunda parte: **impedir productos vacíos y hacer una validación básica del formulario en Angular 18**.


---


Perfecto 😎. Ahora vamos con la segunda y última mejora de Angular 18: **evitar que se puedan guardar productos vacíos**.

Para este módulo quiero que hagamos algo sencillo y clásico de Angular 18, sin adelantarnos a las APIs modernas que estudiaremos después.

## 2. Validación básica del formulario

Vamos a imponer estas reglas:

|Campo|Regla|
|---|---|
|Nombre|Obligatorio|
|Descripción|Obligatoria|
|Precio|Mayor que 0|
|Stock|0 o mayor|

Y además queremos que **Editar → Actualizar** también respete las mismas reglas.

### Paso 1 — Agregar una función de validación

Abre:

```text
src/app/components/product-form/product-form.component.ts
```

Dentro de `ProductFormComponent`, antes de `addProduct()`, agrega:

```ts
isFormValid(): boolean {
  return (
    this.product.name.trim() !== '' &&
    this.product.description.trim() !== '' &&
    this.product.price > 0 &&
    this.product.stock >= 0
  );
}
```

### ¿Qué está haciendo?

Esta parte:

```ts
this.product.name.trim() !== ''
```

comprueba que el nombre no esté vacío.

El `trim()` es importante porque también considera inválido algo como:

```text
"     "
```

Lo mismo hacemos con la descripción.

Después:

```ts
this.product.price > 0
```

impide:

```text
0
-100
```

Y:

```ts
this.product.stock >= 0
```

permite:

```text
0
5
20
```

pero no:

```text
-5
```

---

## Paso 2 — Evitar guardar desde `addProduct()`

Ahora modifica:

```ts
addProduct(): void {
```

para que quede así:

```ts
addProduct(): void {
  if (!this.isFormValid()) {
    return;
  }

  this.productService.addProduct(this.product);

  this.product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };
}
```

La parte importante es:

```ts
if (!this.isFormValid()) {
  return;
}
```

Significa:

> "Si el formulario NO es válido, salgo inmediatamente y no guardo nada."

Por lo tanto, el `ProductService` **ni siquiera recibe el producto inválido**.

---

## Paso 3 — Hacer lo mismo para actualizar

Ahora modifica `updateProduct()`.

Debe quedar:

```ts
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
```

Ahora tenemos:

```text
Agregar
   ↓
isFormValid()
   ↓
   ├── ❌ inválido → return
   │
   └── ✅ válido → ProductService
```

Y exactamente lo mismo para actualizar.

---

# Paso 4 — Probémoslo

Ahora **no agregues todavía mensajes visuales de error**. Primero comprobemos que la lógica funciona.

### Prueba 1

Deja todo vacío y presiona:

**Agregar producto**

Resultado esperado:

```text
❌ No se agrega nada
❌ No aumenta el ID
```

---

### Prueba 2

Pon:

```text
Nombre:    
Descripción:
Precio: 0
Stock: 0
```

Resultado:

```text
❌ No se agrega
```

---

### Prueba 3

Pon:

```text
Nombre: Teclado
Descripción:
Precio: 59990
Stock: 10
```

Resultado:

```text
❌ No se agrega
```

---

### Prueba 4

Pon:

```text
Nombre: Teclado
Descripción: Teclado mecánico RGB
Precio: 59990
Stock: 10
```

Resultado:

```text
✅ Se agrega
```

---

### Prueba 5 — Stock 0

Pon:

```text
Nombre: Producto sin stock
Descripción: Producto agotado
Precio: 10000
Stock: 0
```

Esto **sí debe poder guardarse**.

¿Por qué?

Porque `0` stock es perfectamente válido. Significa que el producto existe pero actualmente está agotado.

---

## Y aquí tenemos algo interesante para nuestro laboratorio

Esta validación pertenece perfectamente a **Angular 18**, pero **no significa que esta sea la forma definitiva de hacer formularios en Angular**.

Estamos haciendo deliberadamente algo bastante manual:

```ts
isFormValid()
```

y después:

```ts
if (!this.isFormValid()) {
  return;
}
```

Más adelante podremos comparar esto con las distintas generaciones de formularios de Angular y ver cómo evolucionan las herramientas.

Pero por ahora queremos que nuestro Angular 18 tenga un CRUD **funcional y limpio**, sin adelantarnos a Angular 19/20/21/22.

---

Haz esas cinco pruebas. Si todo funciona, nos queda **una última cosita pequeña antes de cerrar Angular 18**: hacer que el usuario **vea por qué el formulario es inválido**, en lugar de simplemente que el botón no haga nada. Después documentamos Angular 18 y saltamos oficialmente a **Angular 19**.