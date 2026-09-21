import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Angular 18:
  // @Input() products: Product[] = [];

  // Angular 19:
  // Signal Input estable.
  //
  // El componente recibe la lista desde su componente padre.
  products = input.required<Product[]>();

}