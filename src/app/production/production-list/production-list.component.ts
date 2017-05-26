import { Component, OnInit } from '@angular/core';
import { ProductionModel } from "app/production/shared/production-model";
import { ProductionService } from "app/production/shared/production.service";
import { MilkQuality } from "app/calidad-leche/shared/milk-quality.model";
import { MilkQualityService } from "app/calidad-leche/shared/milk-quality.service";
import { Cow } from "app/cows/shared/cow.model";
import { CowService } from "app/cows/shared/cow.service";
import { Empleados } from "app/reg-empleados/shared/empleados.model";
import { RegEmpleadosService } from "app/reg-empleados/shared/reg-empleados.service";

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit {
  

  qualityList: MilkQuality[];
  cowsList: Cow[];
  employeeList: Empleados[];
  Production :ProductionModel;
  productionList: ProductionModel[];
  isEdit:boolean;
  errorMessage: any;
  message: string;

  constructor(private productionService: ProductionService,
  private milkQualityService: MilkQualityService,
  private cowService: CowService,
  private empleadosService: RegEmpleadosService) { }


ngOnInit() {
    this.Production =new ProductionModel();
    this.isEdit=false;
    this.getAllQualities();
    this.getAllCows();
    this.getAllProductions();
    this.getAllEmpleados();
    
  }
  save() {
    if (this.isEdit) {
      this.productionService.updateProductionById(this.Production.idProduction, this.Production)
      .subscribe(
        message => {this.isEdit=false;
          this.message = message; 
          this.Production = new ProductionModel();
          this.getAllProductions();
       },
        error => this.errorMessage =<any>error
      );
    } else {
      this.productionService.addProduction(this.Production)
        .subscribe(
        message => {
          this.isEdit=false;
          this.message = message; 
          this.Production = new ProductionModel();
          this.getAllProductions();
       },
        error => this.errorMessage = <any>error
        );
    }
  }

  


remove(production: ProductionModel){
  this.productionService.deleteProductionById(production.idProduction)
  .subscribe(
        message => {this.isEdit=false;
          this.message = message; 
          this.Production = new ProductionModel();
          this.getAllProductions();
       },
        error => this.errorMessage = <any>error
        );
}
  
  onSelect(production: ProductionModel){
    this.isEdit = true;
    this.Production =production;
  }

  onIdChange(){
    this.productionService.getProductionById(this.Production.idProduction)
    .subscribe(
      production =>{
        this.isEdit = true;
        this.Production = production;
      }
    )
  }

  getAllProductions(){
    return this.productionService.getAllProductions()
    .subscribe(
      productions => this.productionList =productions,
      error =>  this.errorMessage = <any>error
    );
  }

  getAllQualities() {
    return this.milkQualityService.getAllQualities()
      .subscribe(
      quality => this.qualityList = quality,
      error => this.errorMessage = error = <any>error
      )
  }

  getAllCows() {  
    return this.cowService.getAllCows()
      .subscribe(
      cows => this.cowsList = cows,
      error => this.errorMessage = <any>error
      )
  }

  getAllEmpleados() {  
    return this.empleadosService.getAllEmpleados()
      .subscribe(
      empleado => this.employeeList = empleado,
      error => this.errorMessage = <any>error
      )
  }

}
