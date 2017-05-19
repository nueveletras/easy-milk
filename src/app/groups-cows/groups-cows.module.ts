import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsCowsRoutingModule } from './groups-cows-routing.module';
import { GroupCowService } from "app/groups-cows/shared/group-cow.service";

@NgModule({
  imports: [
    CommonModule,
    GroupsCowsRoutingModule
  ],
  declarations: [],
  providers: [GroupCowService]
})
export class GroupsCowsModule { }
