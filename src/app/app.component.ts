import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ListaComponent],
})
export class AppComponent {
  title = 'app';
}

