import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "app/home/home-routing.module";
import { RegEmpleadosModule } from "app/reg-empleados/reg-empleados.module";

@NgModule({
  imports: [
    CommonModule,
    RegEmpleadosModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
