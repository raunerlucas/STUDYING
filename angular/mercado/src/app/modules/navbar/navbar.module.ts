import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroComponent } from '../../components/primeiro/primeiro.component';
import {PrimeiroRoutes} from "../../components/primeiro/primeiro.routing";

@NgModule({
  declarations: [
    // NavbarComponent
    PrimeiroComponent
  ],
  imports: [
    CommonModule,
    PrimeiroRoutes
  ],
  exports:[
    // Exporta o componente para ser utilizado em outros módulos
    PrimeiroComponent
  ]
})
export class NavbarModule { }
