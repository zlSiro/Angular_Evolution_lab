# Angular 19 CRUD — Angular Evolution Lab

Este proyecto forma parte de **Angular Evolution Lab**, un laboratorio educativo cuyo objetivo es estudiar la evolución de Angular construyendo el mismo CRUD en diferentes versiones del framework.

En este módulo se implementa el mismo CRUD desarrollado anteriormente en Angular 18, pero utilizando las características estables disponibles en **Angular 19**.

La idea principal no es construir una aplicación empresarial compleja, sino poder observar de manera práctica cómo evoluciona Angular entre versiones.

---

## 📚 Angular Evolution Lab

El laboratorio está organizado de la siguiente manera:

```text
angular-evolution-lab/
├── README.md
├── angular18_crud/
├── angular19_crud/
├── angular20_crud/
├── angular21_crud/
└── angular22_crud/
```

Cada proyecto es independiente y utiliza la versión correspondiente de Angular.

El objetivo es construir esencialmente el mismo producto en cada versión para poder comparar:

* APIs.
* Sintaxis.
* Arquitectura.
* Manejo de estado.
* Comunicación entre componentes.
* Formularios.
* Control flow.
* Características nuevas y estabilizadas.

---

# 🚀 Angular 19 CRUD

Aplicación CRUD de productos desarrollada con Angular 19.

El proyecto utiliza:

* Angular 19.2.25
* Angular CLI 19.2.27
* TypeScript 5.7.3
* RxJS 7.8.2
* Node.js 22.23.2
* Tailwind CSS 4.3.3

La aplicación funciona completamente en memoria utilizando un servicio Angular, sin backend ni base de datos.

---

# 🎯 Objetivos del módulo

Los objetivos principales de este módulo son:

1. Reproducir el CRUD desarrollado en Angular 18.
2. Utilizar las APIs modernas estabilizadas en Angular 19.
3. Estudiar los Signal Inputs.
4. Estudiar los Function-based Outputs.
5. Estudiar `model()`.
6. Comparar la comunicación entre componentes de Angular 18 y Angular 19.
7. Mantener `ngModel` para estudiar que Signals y formularios template-driven pueden coexistir.
8. Utilizar el control flow moderno (`@if`, `@for`).
9. Mantener una interfaz visual equivalente a Angular 18 para poder comparar únicamente la evolución técnica.

---

# 🧱 Estructura del proyecto

```text
src/
└── app/
    ├── components/
    │   ├── input-demo/
    │   ├── output-demo/
    │   ├── model-demo/
    │   ├── product-list/
    │   └── product-form/
    │
    ├── models/
    │   └── product.ts
    │
    ├── services/
    │   └── product.service.ts
    │
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.css
    ├── app.config.ts
    └── app.routes.ts
```

---

# 📦 Modelo Product

El CRUD utiliza un modelo sencillo:

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

Los productos contienen:

* `id`
* `name`
* `description`
* `price`
* `stock`

---

# ⚙️ ProductService

Los productos se almacenan temporalmente en memoria mediante `ProductService`.

```ts
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Teclado mecánico',
      description: 'Teclado mecánico RGB para gaming',
      price: 89990,
      stock: 15
    },
    {
      id: 2,
      name: 'Mouse gamer',
      description: 'Mouse óptico de alta precisión',
      price: 49990,
      stock: 25
    },
    {
      id: 3,
      name: 'Monitor 27"',
      description: 'Monitor IPS de 27 pulgadas',
      price: 199990,
      stock: 8
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(
      product => product.id !== id
    );
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(
      product => product.id === updatedProduct.id
    );

    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
```

Este servicio permite realizar las cuatro operaciones principales:

```text
Create
Read
Update
Delete
```

---

# 🔄 CRUD implementado

## Read — Listar productos

`ProductListComponent` recibe los productos desde `AppComponent`.

En Angular 19 se utiliza un **Signal Input**:

```ts
products = input.required<Product[]>();
```

El padre entrega los productos:

```html
<app-product-list
  [products]="products"
/>
```

Para recorrer los productos utilizamos el control flow moderno:

```html
@for (product of searchProducts(); track product.id) {
  ...
}
```

---

# 🔎 Búsqueda

La búsqueda se mantiene mediante `ngModel`:

```html
<input
  [(ngModel)]="searchTerm"
/>
```

Y el filtrado se realiza mediante:

```ts
searchProducts(): Product[] {
  const term = this.searchTerm.toLowerCase();

  return this.products().filter(product =>
    product.name.toLowerCase().includes(term)
  );
}
```

### Importante

Angular 19 no elimina `ngModel`.

En este proyecto se mantiene intencionalmente para demostrar que:

```text
Signals
+
ngModel
```

pueden coexistir.

---

# ➕ Create — Crear productos

El formulario utiliza `ngModel` para realizar two-way data binding:

```html
[(ngModel)]="product.name"
```

El objeto utilizado por el formulario es:

```ts
product: Product = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0
};
```

Al guardar:

```ts
addProduct(): void {

  if (
    !this.product.name.trim() ||
    !this.product.description.trim() ||
    this.product.price <= 0 ||
    this.product.stock < 0
  ) {
    console.log('Producto inválido');

    return;
  }

  this.product.id = Date.now();

  this.productService.addProduct(this.product);

  this.resetForm();
}
```

La validación impide:

* Nombre vacío.
* Descripción vacía.
* Precio menor o igual a cero.
* Stock negativo.

El ID solamente se genera después de superar la validación.

---

# 🧹 Limpiar formulario

Después de crear un producto:

```ts
resetForm(): void {
  this.product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };
}
```

Esto permite volver inmediatamente al estado inicial del formulario.

---

# ✏️ Update — Editar productos

El flujo de edición comienza en `ProductListComponent`.

Cuando se presiona:

```html
(click)="editProduct(product)"
```

se emite el producto mediante:

```ts
edit = output<Product>();
```

El padre recibe el evento:

```html
(edit)="onEditProduct($event)"
```

y guarda el producto:

```ts
onEditProduct(product: Product): void {
  this.selectedProduct = product;
}
```

Posteriormente se entrega al formulario:

```html
<app-product-form
  [productToEdit]="selectedProduct"
/>
```

---

# 📥 Signal Input

En Angular 19 utilizamos:

```ts
productToEdit = input<Product | null>(null);
```

Esto reemplaza conceptualmente al enfoque tradicional:

```ts
@Input() productToEdit: Product | null = null;
```

Cuando se necesita leer el valor del Signal Input:

```ts
this.productToEdit()
```

---

# ⚡ Sincronización mediante `effect()`

El formulario utiliza `effect()` para reaccionar cuando cambia el producto recibido:

```ts
private syncProductEffect = effect(() => {

  const product = this.productToEdit();

  if (product) {
    this.product = { ...product };
  }

});
```

Se crea una copia:

```ts
this.product = { ...product };
```

en lugar de utilizar directamente:

```ts
this.product = product;
```

Esto evita modificar accidentalmente el objeto original mientras el usuario está editando el formulario.

---

# 🔄 Actualizar producto

La actualización utiliza el ID existente:

```ts
updateProduct(): void {

  if (
    !this.product.name.trim() ||
    !this.product.description.trim() ||
    this.product.price <= 0 ||
    this.product.stock < 0
  ) {
    console.log('Producto inválido');

    return;
  }

  this.productService.updateProduct(this.product);

  this.resetForm();

  this.finished.emit();
}
```

A diferencia de la creación, durante una actualización **no se genera un nuevo ID**.

El servicio busca el producto existente:

```ts
const index = this.products.findIndex(
  product => product.id === updatedProduct.id
);
```

y reemplaza sus datos.

---

# ❌ Delete — Eliminar productos

El hijo emite el ID:

```ts
delete = output<number>();
```

```ts
deleteProduct(id: number): void {
  this.delete.emit(id);
}
```

El padre recibe el evento:

```html
(delete)="onDeleteProduct($event)"
```

y utiliza el servicio:

```ts
onDeleteProduct(id: number): void {
  this.productService.deleteProduct(id);

  this.products = this.productService.getProducts();
}
```

---

# ↩️ Cancelar edición

El formulario también permite cancelar la edición.

Se utiliza:

```ts
cancelEdit(): void {
  this.resetForm();
  this.finished.emit();
}
```

El padre escucha:

```html
(finished)="onFormFinished()"
```

y elimina el producto selecc
