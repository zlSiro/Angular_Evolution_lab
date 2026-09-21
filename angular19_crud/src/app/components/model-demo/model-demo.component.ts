import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-demo',
  imports: [],
  templateUrl: './model-demo.component.html',
  styleUrl: './model-demo.component.css'
})
export class ModelDemoComponent {

  // Angular 18:
  // @Input() value = '';
  // @Output() valueChange = new EventEmitter<string>();

  // Angular 19:
  // model() estable desde Angular 19.
  //
  // Reemplaza el patrón combinado de @Input() + @Output()
  // cuando necesitamos comunicación bidireccional.
  value = model<string>('');

  changeValue(): void {
    this.value.set('Valor cambiado desde el hijo');
  }

  appendValue(): void {
    this.value.update(currentValue => {
      return currentValue + '!';
    });
  }
}