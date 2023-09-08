import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent {

  estilo: string = "disabled"
  trocaEstilo(){
    this.estilo === "disabled" ? this.estilo = "enabled" : this.estilo = "disabled";
  }

  corfundo: string = "red"
  colorfont: string = "yellow"

  item: string = ""
  listaCompra: string[] = []

  addLista(){
   this.listaCompra.push(this.item)
  }

  isEnableBlock: boolean = true
}
