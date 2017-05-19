import { Component, OnInit } from '@angular/core';
import { Empleados } from "app/reg-empleados/shared/empleados.model";
import { RegEmpleadosService } from "app/reg-empleados/shared/reg-empleados.service";



@Component({
  selector: 'app-reg-empleados-list',
  templateUrl: './reg-empleados-list.component.html',
  styleUrls: ['./reg-empleados-list.component.css']
})
export class RegEmpleadosListComponent implements OnInit {

regempleados: Empleados;
regempleadosList:Empleados[];
isEdit:boolean;
errorMessage: any;
message: string;


  constructor(private regEmpleadosService: RegEmpleadosService) {}

  ngOnInit() {
    this.isEdit= false;
    this.regempleados = new Empleados();
    this.getAllEmpleados();
  }

  save(){
    if(this.regempleados.hireDate){
      this.regempleados.hireDate = new Date(this.regempleados.hireDate);
    }
    
    if (this.isEdit) {
      this.regEmpleadosService.updateEmpleadosById(this.regempleados.idUser, this.regempleados)
      .subscribe(
        message => {
          this.isEdit = false;
          this.message = message;
          this.regempleados = new Empleados();
          this.getAllEmpleados();
        },
        error => this.errorMessage = <any>error
      
      );

    } else {
      this.regEmpleadosService.addEmpleados(this.regempleados)
      .subscribe(
        message => {
          console.log(message);
          this.isEdit = false;
          this.regempleados = new Empleados();
          this.getAllEmpleados();
        },
        error => this.errorMessage = <any>error
      );
    }
  
   }
   remove(regempleados: Empleados){
     this.regEmpleadosService.deleteEmpleadosById(regempleados.idUser)
     .subscribe(
       message => {       
          this.message = message;
          this.getAllEmpleados();
        },
        error => this.errorMessage = <any>error
     );
     
   }



   onSelect(regempleados: Empleados) {
     this.isEdit = true;
     this.regempleados = regempleados;
   }

   onIdChange(){
    this.regEmpleadosService.getEmpleadosById(this.regempleados.idUser)
    .subscribe(
      regempleados => {
        this.isEdit = true;
        this.regempleados = regempleados;
      }
    );
   }

   getAllEmpleados(){
     return this.regEmpleadosService.getAllEmpleados()
     .subscribe(
      empleados => this.regempleadosList = empleados,
      error => this.errorMessage = <any>error
     )
     
   }
}
