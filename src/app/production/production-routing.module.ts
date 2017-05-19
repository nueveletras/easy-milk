import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionListComponent } from "app/production/production-list/production-list.component";

const routes: Routes = [
  {path:'production', component: ProductionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
