import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aulas de Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
}
