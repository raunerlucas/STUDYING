import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  someText: string = 'TESTANDO O PIPE OPERATORS';

  today = new Date();
  a: number = 0.259;
  b: number = 1.3495;
  pi: number = 3.14159265359;
 

}
