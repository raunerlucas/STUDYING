import { Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = []
  menuType: string = "superuser"

  isAlivePtag: boolean = false;

  alter() {
    this.isAlivePtag = !this.isAlivePtag;
  }

  constructor(){
    this.produtos =[
      "Mause",
      "Teclado",
      "Cadeira",
      "Monitor",
      "Computador"
    ]
  }

  add() {
    this.produtos.push("Rauner")
  }

  remove(index: number) {
    this.produtos.slice(index,1)
  }

}
