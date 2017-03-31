import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PotrerosComponent } from './potreros/potreros.component';
import { NovedadesComponent } from './novedades/novedades.component';

@NgModule({
  declarations: [
    AppComponent,
    PotrerosComponent,
    NovedadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
