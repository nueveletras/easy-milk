import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CowsComponent } from './cows/cows.component';
import { RegEmpleadosComponent } from './reg-empleados/reg-empleados.component';
import { PotrerosComponent } from './potreros/potreros.component';
import { NovedadesComponent } from './novedades/novedades.component';


@NgModule({
  declarations: [
    AppComponent,
    CowsComponent,
    RegEmpleadosComponent,
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
