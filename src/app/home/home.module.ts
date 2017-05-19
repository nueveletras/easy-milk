import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionModule } from "app/production/production.module";
import { CalidadLecheModule } from "app/calidad-leche/calidad-leche.module";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "app/home/home-routing.module";
import { RegEmpleadosModule } from "app/reg-empleados/reg-empleados.module";
import { CowsModule } from "app/cows/cows.module";
import { GroupsCowsModule } from "app/groups-cows/groups-cows.module";
import { PotrerosModule } from "app/potreros/potreros.module";

@NgModule({
  imports: [
    CommonModule,
    RegEmpleadosModule,
    CowsModule,
    ProductionModule,
    GroupsCowsModule,
    CalidadLecheModule,
    PotrerosModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
