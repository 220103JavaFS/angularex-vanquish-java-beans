import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { EliasComponent } from './components/elias/elias.component';
import { EricComponent } from './components/eric/eric.component';
import { JustinComponent } from './components/justin/justin.component';
import { JessieComponent } from './components/jessie/jessie.component';
import { MarioComponent } from './components/mario/mario.component';

const routes: Routes = [{
  path:"eric",
  component:EricComponent
},{
  path:"justin",
  component:JustinComponent
}, {
   path:"jessie",
  component:JessieComponent
},
{
   path:"elias",
  component:EliasComponent
}, {
  path:"mario",
  component:MarioComponent
}, {
  path: "",
  component:DefaultComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
