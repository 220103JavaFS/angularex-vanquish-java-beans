import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EricComponent } from './components/eric/eric.component';
import { FormsModule } from '@angular/forms';
import { EliasComponent } from './components/elias/elias.component';
import { JessieComponent } from './components/jessie/jessie.component';
import { JustinComponent } from './components/justin/justin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarioComponent } from './components/mario/mario.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    EricComponent,
    EliasComponent,
    JessieComponent,
    JustinComponent,
    MarioComponent,
    NavbarComponent,
    DefaultComponent
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
