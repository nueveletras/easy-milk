import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalidadLecheRoutingModule } from './calidad-leche-routing.module';
import { MilkQualityService } from "app/calidad-leche/shared/milk-quality.service";

@NgModule({
  imports: [
    CommonModule,
    CalidadLecheRoutingModule
  ],
  declarations: [],
  providers: [
    MilkQualityService
  ]
})
export class CalidadLecheModule { }
