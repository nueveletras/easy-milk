import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "app/home/home-routing.module";
import { CowsModule } from "app/cows/cows.module";
import { GroupsCowsModule } from "app/groups-cows/groups-cows.module";

@NgModule({
  imports: [
    CommonModule,
    CowsModule,
    GroupsCowsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
