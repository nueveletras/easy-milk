import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RegEmpleadosRoutingModule } from './reg-empleados-routing.module';
import { RegEmpleadosCreateComponent } from './reg-empleados-create/reg-empleados-create.component';
import { RegEmpleadosListComponent } from "app/reg-empleados/reg-empleados-list/reg-empleados-list.component";
import { FormsModule } from "@angular/forms";
import { RegEmpleadosService } from "app/reg-empleados/shared/reg-empleados.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegEmpleadosRoutingModule
  ],
  declarations: [RegEmpleadosCreateComponent, 
    RegEmpleadosListComponent], 
    providers: [
      RegEmpleadosService
    ]
})
export class RegEmpleadosModule { }
