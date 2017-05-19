import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotrerosListComponent } from "app/potreros/potreros-list/potreros-list.component";

const routes: Routes = [
  { path: 'pastures', component: PotrerosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PotrerosRoutingModule { }
