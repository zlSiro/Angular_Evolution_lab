import { Component, signal } from '@angular/core';
import { LinkedSignalDemo } from './components/linked-signal-demo/linked-signal-demo';

@Component({
  selector: 'app-root',
  imports: [LinkedSignalDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20_crud');
}
