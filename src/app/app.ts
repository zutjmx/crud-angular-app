import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo desde Angular');
  enabled: boolean = false;

  toggleEnabled() {
    this.enabled = !this.enabled;
    console.log('Valor de enabled',this.enabled);
  }

}
