import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EricComponent } from './components/eric/eric.component';
import { FormsModule } from '@angular/forms';
import { EliasComponent } from './components/elias/elias.component';

@NgModule({
  declarations: [
    AppComponent,
    EricComponent,
    EliasComponent
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
