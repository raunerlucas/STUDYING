import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    ){

    // Recupera o id passado na url exp http://localhost:4200/portifolio/1
    this.activeRoute.params.subscribe(parameter => console.log(parameter));

    // Recupera o id passado na url so que de uma rota filha exp http://localhost:4200/portifolio/1
    this.activeRoute.firstChild?.params.subscribe(parameter => console.log(parameter));

    // Recupera os parametros passados na url
    // exp http://localhost:4200/portifolio/1?parametro=resgatado&int=2
    this.activeRoute.queryParams.subscribe(parameter => console.log(parameter));

  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.router.navigate(['/']);
    // },5000)

  }


}
