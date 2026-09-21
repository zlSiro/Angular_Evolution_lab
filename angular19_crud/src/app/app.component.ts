import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDemoComponent } from './components/input-demo/input-demo.component';
import { OutputDemoComponent } from './components/output-demo/output-demo.component';
import { ModelDemoComponent } from './components/model-demo/model-demo.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular19_crud';

  // onProductDeleted(productId: number): void {
  //   console.log('Producto eliminado:', productId);
  // }

  // name = 'JuanPablo';

  products;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}