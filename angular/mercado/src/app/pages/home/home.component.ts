import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  varPai: String = 'Uma variável que tem valor';
  result!: String;


  clicou(event: String) {
    this.result = event;
  }

  protected readonly event = event;
}
