import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
name = "Rauner Lucas";
age: number =20;
job = "Tentando ser um desenvolvedor";
Hobbies=" Criar coisas";
carro: any = {
  name: "Face",
  marca: "Chery",
  year: 2012,
  proprietary: "Romeu"

};
}
