import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliasComponent } from './components/elias/elias.component';
import { EricComponent } from './components/eric/eric.component';

const routes: Routes = [{
  path:"eric",
  component:EricComponent,},

  {path:"elias",
  component:EliasComponent
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
