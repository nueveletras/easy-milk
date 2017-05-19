import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CowListComponent } from "app/cows/cow-list/cow-list.component";
import { CowCreateComponent } from "app/cows/cow-create/cow-create.component";

const routes: Routes = [
  { path: 'cows', component: CowListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CowsRoutingModule { }
