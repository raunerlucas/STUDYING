import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent {
  cont: number = 0;
  actionOne() {
    this.cont++;
  }

  actionTwo() {
    this.cont > 0 ? this.cont-- : null;
  }
}
