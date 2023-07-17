import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  { path: '',component: FirstComponentComponent},
  { path: 'list',component: ListRenderComponent},
  { path: 'parentData',component: ParentDataComponent},
  { path: 'directives',component: DirectivesComponent},
  { path: 'ifRender',component: IfRenderComponent},
  { path: 'eventos',component: EventosComponent},
  { path: 'Emitter',component: EmitterComponent},
  { path: 'pipes',component: PipesComponent},
  { path: 'twobinding',component: TwoWayBindingComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
