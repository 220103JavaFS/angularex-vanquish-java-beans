import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EricComponent } from './components/eric/eric.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { JessieComponent } from './components/jessie/jessie.component';
=======
import { JustinComponent } from './components/justin/justin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
>>>>>>> b3de7aa5164b23c8ac233dc679da72f144855a74

@NgModule({
  declarations: [
    AppComponent,
    EricComponent,
<<<<<<< HEAD
    JessieComponent
=======
    JustinComponent,
    NavbarComponent
>>>>>>> b3de7aa5164b23c8ac233dc679da72f144855a74
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
