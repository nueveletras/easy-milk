import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotrerosRoutingModule } from './potreros-routing.module';
import { PotrerosComponent } from './potreros.component';

@NgModule({
  imports: [
    CommonModule,
    PotrerosRoutingModule
  ],
  declarations: [PotrerosComponent]
})
export class PotrerosModule { }
