import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  imports: [],
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.css'
})
export class InputDemoComponent {

  name = input.required<string>();
}
