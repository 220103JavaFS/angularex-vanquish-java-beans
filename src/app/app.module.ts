import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EricComponent } from './components/eric/eric.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { EliasComponent } from './components/elias/elias.component';
=======
import { JustinComponent } from './components/justin/justin.component';
>>>>>>> 058b378fa5ff4009078386e5842960040fd021af

@NgModule({
  declarations: [
    AppComponent,
    EricComponent,
<<<<<<< HEAD
    EliasComponent
=======
    JustinComponent
>>>>>>> 058b378fa5ff4009078386e5842960040fd021af
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
