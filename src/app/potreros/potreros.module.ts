import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotrerosRoutingModule } from './potreros-routing.module';

import { PotrerosListComponent } from './potreros-list/potreros-list.component';
import { FormsModule } from "@angular/forms";
import { PotreroService } from "app/potreros/shared/potrero.service";


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    PotrerosRoutingModule
  ],
  declarations: [PotrerosListComponent],
  providers:[
    PotreroService
  ]
})
export class PotrerosModule { }
