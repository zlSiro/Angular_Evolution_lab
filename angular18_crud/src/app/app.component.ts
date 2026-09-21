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
