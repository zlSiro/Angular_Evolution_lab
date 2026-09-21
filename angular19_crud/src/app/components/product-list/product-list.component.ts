import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Angular 18:
  // @Input() products: Product[] = [];

  // Angular 19:
  // Signal Input estable.
  products = input.required<Product[]>();

  // Angular 18:
  // @Output() edit = new EventEmitter<Product>();

  // Angular 19:
  // Function-based Output estable.
  edit = output<Product>();

  // Angular 18:
  // @Output() delete = new EventEmitter<number>();

  // Angular 19:
  // Function-based Output estable.
  delete = output<number>();

  searchTerm = '';

  searchProducts(): Product[] {
    const term = this.searchTerm.toLowerCase();

    return this.products().filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }

  editProduct(product: Product): void {
    this.edit.emit(product);
  }

  deleteProduct(id: number): void {
    this.delete.emit(id);
  }

}