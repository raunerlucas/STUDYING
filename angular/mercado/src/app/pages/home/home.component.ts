import {Component} from '@angular/core';
import {GetCepService} from "./servers/get-cep.service";

interface endereco {
  "cep": string,
  "logradouro": string,
  "complemento": string,
  "bairro": string,
  "localidade": string,
  "uf": string,
  "ibge": string,
  "gia": string,
  "ddd": string,
  "siafi": string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  varPai: String = 'Uma variável que tem valor';
  result!: String;
  cep!: endereco;

  constructor(
    private getCEP: GetCepService
  ) {
  }

  ngOnInit() {
    this.showCep();
  }

  showCep() {
    this.getCEP.cep("77020524").subscribe((data) => {
      console.log(data);
      this.cep = data as endereco;
    });
  }

  formatCep() {
    let c = this.cep
    return `Cep: ${c.cep}, Logradouro: ${c.logradouro}, Complemento: ${c.complemento}, Bairro: ${c.bairro},
     Localidade: ${c.localidade}, UF: ${c.uf},
     IBGE: ${c.ibge}, GIA: ${c.gia}, DDD: ${c.ddd}, SIAFI: ${c.siafi}`;
  }

  clicou(event: String) {
    this.result = event;
  }

  protected readonly event = event;
}
