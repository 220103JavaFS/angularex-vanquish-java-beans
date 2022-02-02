import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EricComponent } from './components/eric/eric.component';

const routes: Routes = [{
  path:"eric",
  component:EricComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
