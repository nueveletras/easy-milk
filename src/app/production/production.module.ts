import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';
import { ProductionListComponent } from './production-list/production-list.component';
import { ProductionService } from "app/production/shared/production.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductionRoutingModule
  ],
  declarations: [ProductionComponent, ProductionListComponent],
  providers: [ProductionService]
})
export class ProductionModule { }
