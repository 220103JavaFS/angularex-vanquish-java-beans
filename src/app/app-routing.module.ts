import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EricComponent } from './components/eric/eric.component';
import { JustinComponent } from './components/justin/justin.component';

const routes: Routes = [{
  path:"eric",
  component:EricComponent
},{
  path:"justin",
  component:JustinComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
