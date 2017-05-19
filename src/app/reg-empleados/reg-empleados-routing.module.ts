import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegEmpleadosComponent } from "app/reg-empleados/reg-empleados.component";
import { RegEmpleadosListComponent } from "app/reg-empleados/reg-empleados-list/reg-empleados-list.component";
import { RegEmpleadosCreateComponent } from "app/reg-empleados/reg-empleados-create/reg-empleados-create.component";

const routes: Routes = [
  {path: 'reg-empleados', component: RegEmpleadosListComponent}
];
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegEmpleadosRoutingModule { }
