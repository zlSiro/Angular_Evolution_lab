import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal-demo',
  imports: [],
  templateUrl: './linked-signal-demo.html',
  styleUrl: './linked-signal-demo.css',
})
export class LinkedSignalDemo {

  // Angular 20: estado fuente
  options = signal(['Rojo', 'Verde', 'Azul']);

  // Angular 20: estado vinculado a la fuente.
  // Inicialmente toma el primer elemento del estado fuente.
  selected = linkedSignal(() => this.options()[0]);
}
