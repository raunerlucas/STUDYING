import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PrimeiroComponent} from "./components/primeiro/primeiro.component";

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'cont', loadChildren: () => import('./modules/navbar/navbar.module').then(m => m.NavbarModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
