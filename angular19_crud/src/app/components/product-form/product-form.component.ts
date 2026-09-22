import { Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  // Angular 18:
  // @Input() productToEdit: Product | null = null;

  // Angular 19:
  // Signal Input estable desde Angular 19.
  productToEdit = input<Product | null>(null);

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

}