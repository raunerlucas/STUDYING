import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  add(): void {
    this.quantidade++;
  }

  decrement(): void {
    this.quantidade--;
  }

  constructor() {}

  ngOnInit(): void {
    console.log('onitit');
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }

  // checked => content => view

  // Quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  // apos alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('AfterContentCheck');
  }

  // apos alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('AfetViewChecked');
  }

  ngOnDestroy(): void {
    console.log("GoodBye My friend");
  }

}
