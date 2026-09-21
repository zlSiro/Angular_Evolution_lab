import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDemoComponent } from './components/input-demo/input-demo.component';
import { OutputDemoComponent } from './components/output-demo/output-demo.component';
import { ModelDemoComponent } from './components/model-demo/model-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModelDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular19_crud';

  onProductDeleted(productId: number): void {
    console.log('Producto eliminado:', productId);
  }

  name = 'JuanPablo';
}