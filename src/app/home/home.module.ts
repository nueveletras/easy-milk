import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CowsModule } from "app/cows/cows.module";
import { ProductionModule } from "app/production/production.module";
import { GroupsCowsModule } from "app/groups-cows/groups-cows.module";
import { CalidadLecheModule } from "app/calidad-leche/calidad-leche.module";

@NgModule({
  imports: [
    CommonModule,
    CowsModule,
    ProductionModule,
    GroupsCowsModule,
    CalidadLecheModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
