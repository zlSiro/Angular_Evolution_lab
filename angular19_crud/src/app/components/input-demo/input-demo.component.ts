import { Component, input } from '@angular/core';
import { RouterOutlet } from '../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K';

@Component({
  selector: 'app-input-demo',
  imports: [RouterOutlet],
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.css'
})
export class InputDemoComponent {

  name = input.required<string>();
}
