import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroComponent } from '../../components/primeiro/primeiro.component';

@NgModule({
  declarations: [
    // NavbarComponent
    PrimeiroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // Exporta o componente para ser utilizado em outros módulos
    PrimeiroComponent
  ]
})
export class NavbarModule { }
