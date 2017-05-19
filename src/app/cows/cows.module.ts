import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CowsRoutingModule } from './cows-routing.module';
import { CowListComponent } from './cow-list/cow-list.component';
import { CowCreateComponent } from './cow-create/cow-create.component';
import { FormsModule } from "@angular/forms";
import { CowService } from "app/cows/shared/cow.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CowsRoutingModule
  ],
  declarations: [CowListComponent, CowCreateComponent],
  providers:[ CowService ]
})
export class CowsModule { }
