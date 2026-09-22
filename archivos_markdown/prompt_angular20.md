# Contexto — Angular Evolution Lab

Estoy trabajando contigo en un proyecto educativo llamado **Angular Evolution Lab**.

El objetivo es estudiar la evolución de Angular desde la versión 18 hasta la 22 construyendo exactamente el mismo CRUD en proyectos independientes:

```text
angular-evolution-lab/
├── README.md
├── angular18_crud/
├── angular19_crud/
├── angular20_crud/
├── angular21_crud/
└── angular22_crud/
```

Cada aplicación es independiente.

## Objetivo principal

Quiero estudiar **qué cambia realmente entre versiones de Angular**, no simplemente construir una aplicación moderna.

Por eso es muy importante:

* Respetar las APIs disponibles en la versión que estamos estudiando.
* No utilizar APIs que todavía eran experimentales/Developer Preview en esa versión y presentarlas como estables.
* No atribuir a una versión características que ya existían anteriormente.
* Distinguir entre "introducido" y "estabilizado".
* Mantener comentarios educativos indicando Angular anterior vs Angular actual.
* Mantener el mismo diseño visual en todas las versiones para que la comparación técnica sea clara.
* Avanzar **paso a paso**, sin saltar varios pasos.
* Después de cada cambio quiero probar la aplicación antes de continuar.

## Angular 18

El CRUD de Angular 18 está terminado y documentado.

Incluye:

* Standalone Components.
* `@Input()`.
* `@Output()` + `EventEmitter`.
* `ngModel` + `FormsModule`.
* Control flow moderno:

  * `@if`
  * `@for`
* CRUD completo:

  * listar
  * buscar
  * crear
  * validar
  * editar
  * actualizar
  * eliminar
  * cancelar edición
  * limpiar formulario.
* Tailwind CSS.

El diseño visual utiliza una estética oscura basada en Tailwind.

## Angular 19

El CRUD de Angular 19 también está terminado.

Versión utilizada:

```text
Angular CLI: 19.2.27
Angular: 19.2.25
Node: 22.23.2
TypeScript: 5.7.3
RxJS: 7.8.2
Tailwind CSS: 4.3.3
```

El proyecto fue creado con:

```powershell
npx @angular/cli@19 new angular19_crud
```

Tailwind se instaló con:

```powershell
npm install tailwindcss @tailwindcss/postcss postcss
```

## Estructura Angular 19

```text
src/app/
├── components/
│   ├── input-demo/
│   ├── output-demo/
│   ├── model-demo/
│   ├── product-list/
│   └── product-form/
├── models/
│   └── product.ts
├── services/
│   └── product.service.ts
├── app.component.ts
├── app.component.html
├── app.component.css
├── app.config.ts
└── app.routes.ts
```

## Modelo Product

```ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

## ProductService

El servicio mantiene productos en memoria:

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

## APIs de Angular 19 que estudiamos

Angular 19 se utilizó para estudiar principalmente APIs que se estabilizaron en esta versión:

### Signal Input

```ts
input()
```

y:

```ts
input.required()
```

Ejemplo:

```ts
product = input.required<Product>();
```

### Function-based Output

```ts
output()
```

Ejemplo:

```ts
productDeleted = output<number>();
```

### Model

```ts
model()
```

Ejemplo:

```ts
value = model<string>('');
```

Se realizó un `model-demo` independiente para estudiar:

```html
[(value)]="name"
```

## Importante sobre Angular 19

NO considerar como novedades de Angular 19:

```text
@if
@for
@switch
```

El nuevo control flow quedó estable en Angular 18.

Tampoco atribuir a Angular 19:

```text
Standalone Components
bootstrapApplication()
ApplicationConfig
provideRouter()
nuevo build system
```

porque ya estaban disponibles anteriormente.

Además, Angular 19 seguía utilizando Zone.js por defecto en los proyectos generados.

No debemos presentar características experimentales/preview de Angular 19 como si fueran APIs estables.

## CRUD Angular 19

### Listar

`ProductListComponent` utiliza:

```ts
products = input.required<Product[]>();
```

y:

```html
@for (product of searchProducts(); track product.id) {
  ...
}
```

### Buscar

Se mantiene:

```html
[(ngModel)]="searchTerm"
```

con `FormsModule`.

No quiero eliminar `ngModel` simplemente porque existan Signals.

### Crear

El formulario mantiene:

```ts
product: Product = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0
};
```

La creación valida:

```ts
if (
  !this.product.name.trim() ||
  !this.product.description.trim() ||
  this.product.price <= 0 ||
  this.product.stock < 0
) {
  return;
}
```

Después genera el ID y utiliza:

```ts
this.productService.addProduct(this.product);
```

Luego limpia el formulario.

### Editar

`ProductListComponent` tiene:

```ts
edit = output<Product>();
```

y:

```ts
editProduct(product: Product): void {
  this.edit.emit(product);
}
```

`AppComponent` recibe el producto y lo guarda en:

```ts
selectedProduct: Product | null = null;
```

Luego:

```html
<app-product-form
  [productToEdit]="selectedProduct"
/>
```

El formulario utiliza:

```ts
productToEdit = input<Product | null>(null);
```

y sincroniza el formulario con:

```ts
private syncProductEffect = effect(() => {

  const product = this.productToEdit();

  if (product) {
    this.product = { ...product };
  }

});
```

Se utiliza una copia superficial para evitar modificar directamente el objeto original mientras se edita.

### Actualizar

Se utiliza:

```ts
this.productService.updateProduct(this.product);
```

manteniendo el ID existente.

### Eliminar

`ProductListComponent` utiliza:

```ts
delete = output<number>();
```

El padre recibe:

```html
(delete)="onDeleteProduct($event)"
```

y ejecuta:

```ts
this.productService.deleteProduct(id);
```

### Cancelar

El formulario utiliza:

```ts
finished = output<void>();
```

Después de actualizar o cancelar:

```ts
this.finished.emit();
```

El padre ejecuta:

```ts
onFormFinished(): void {
  this.selectedProduct = null;
}
```

## Regla de sintaxis

En Angular 19 y las siguientes versiones del laboratorio queremos utilizar el control flow moderno.

Por ejemplo:

```html
@if (...) {
  ...
}
```

y:

```html
@for (...) {
  ...
}
```

No utilizar `*ngIf` ni `*ngFor` salvo que exista una razón educativa específica para compararlos.

## Diseño

Todas las versiones deben mantener aproximadamente el mismo diseño.

Tailwind CSS está siendo utilizado.

La aplicación utiliza una estética oscura basada en:

```text
bg-slate-950
bg-slate-900
bg-slate-800
text-white
text-slate-300
text-slate-400
```

No cambiar innecesariamente el diseño entre versiones porque queremos comparar la evolución técnica.

## Metodología

Quiero que trabajemos **por partes**.

No quiero que me entregues todo el CRUD de Angular 20 de una vez.

La metodología debe ser:

1. Crear/configurar Angular 20.
2. Revisar qué novedades reales tiene Angular 20.
3. Diferenciar novedades de características heredadas de Angular 19.
4. Implementar una característica.
5. Probarla.
6. Confirmar que funciona.
7. Continuar con el siguiente paso.

Si una característica de Angular 20 era experimental, Developer Preview o inestable en esa versión, debemos decirlo claramente y no utilizarla como si fuera estable.

## Objetivo de Angular 20

Construir nuevamente el mismo CRUD:

```text
Create
Read
Update
Delete
```

pero aprovechando únicamente las características que correspondan realmente a Angular 20.

Al terminar Angular 20 debemos generar su propio:

```text
README.md
```

y después continuar con Angular 21.

## Estilo de explicación

Soy desarrollador FullStack y estoy estudiando la evolución de Angular.

Prefiero explicaciones:

* en español;
* claras;
* paso a paso;
* con ejemplos prácticos;
* indicando qué archivo modificar;
* indicando dónde ejecutar comandos;
* con comentarios educativos en el código;
* comparando Angular 19 vs Angular 20 cuando sea relevante.

No adelantarse varios pasos.

Primero explicamos → implementamos → pruebo → confirmo → continuamos.

## Punto exacto donde comenzamos Angular 20

Angular 18 y Angular 19 están terminados y documentados.

Ahora debemos comenzar desde cero:

```text
angular20_crud/
```

y estudiar **qué trae realmente Angular 20 respecto a Angular 19** antes de implementar el CRUD.

