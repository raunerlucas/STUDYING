import {Routes, RouterModule} from "@angular/router";
import {PrimeiroComponent} from "./primeiro.component";

const routes: Routes = [{
  path: '', component: PrimeiroComponent
}];

export const PrimeiroRoutes = RouterModule.forChild(routes);
