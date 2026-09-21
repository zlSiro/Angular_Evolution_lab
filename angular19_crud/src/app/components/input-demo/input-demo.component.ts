import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-input-demo',
  imports: [],
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.css'
})
export class InputDemoComponent {

  // Angular 18:
  // @Input() product!: Product;

  // Angular 19:
  // Signal Input estable. El componente requiere obligatoriamente
  // que el componente padre le entregue un Product.
  product = input.required<Product>();
}
