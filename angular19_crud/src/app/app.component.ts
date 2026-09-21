import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDemoComponent } from './components/input-demo/input-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19_crud';
}
