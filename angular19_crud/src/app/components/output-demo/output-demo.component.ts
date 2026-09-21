import { Component, output } from '@angular/core';

@Component({
  selector: 'app-output-demo',
  imports: [],
  templateUrl: './output-demo.component.html',
  styleUrl: './output-demo.component.css'
})
export class OutputDemoComponent {

  // Angular 18:
  // @Output() productDeleted = new EventEmitter<number>();

  // Angular 19:
  // Function-based Output estable desde Angular 19.
  productDeleted = output<number>();

  deleteProduct(): void {
    const productId = 1;

    this.productDeleted.emit(productId);
  }

}