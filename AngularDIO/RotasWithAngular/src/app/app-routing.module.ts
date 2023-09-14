import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';


const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'},

  // no casso portifoio é a rota principal e portifolio/:id se torna filha dessa
  // pai
  {path: 'portifolio', component: CardComponent, children: [
    // filha
    {path: ':id', component: CardComponent}]},
  // Rota coriga no caso essa vai redirecionar para o TitleComponent
  {path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
