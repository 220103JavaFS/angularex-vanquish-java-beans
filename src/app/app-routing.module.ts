import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EricComponent } from './components/eric/eric.component';
import { JessieComponent } from './components/jessie/jessie.component';

const routes: Routes = [{
  path:"eric",
  component:EricComponent
}, {
   path:"jessie",
  component:JessieComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
