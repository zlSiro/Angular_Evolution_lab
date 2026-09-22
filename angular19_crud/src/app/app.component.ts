import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular19_crud';

  // onProductDeleted(productId: number): void {
  //   console.log('Producto eliminado:', productId);
  // }

  // name = 'JuanPablo';

  products: Product[];

  // Producto seleccionado para editar.
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  onEditProduct(product: Product): void {
    console.log('Producto seleccionado para editar:', product);
    this.selectedProduct = product;
  }

  onDeleteProduct(id: number): void {
    console.log("Producto seleccionado para eliminar: ", id);
    this.productService.deleteProduct(id);

    this.products = this.productService.getProducts();
  }
}