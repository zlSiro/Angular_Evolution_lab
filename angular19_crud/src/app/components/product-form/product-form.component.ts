import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  // Angular 18:
  // @Input() productToEdit: Product | null = null;

  // Angular 19:
  // Signal Input estable desde Angular 19.
  productToEdit = input<Product | null>(null);

}