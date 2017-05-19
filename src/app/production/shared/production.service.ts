import { Injectable } from '@angular/core';
import { ProductionModel } from "app/production/shared/production-model";


@Injectable()
export class ProductionService {

  lastId:number=0;

  //list of all production
  Production: ProductionModel[] =[];
  constructor() { }

  addProduction(Production: ProductionModel): ProductionService {
    if(!Production.idProduction){
      Production.idProduction=++this.lastId;
    }
    this.Production.push(Production);
    return this;
  }

  getAllProductions(): ProductionModel[]{
    return this.Production;
  }

  getProductionById(id:number): ProductionModel{
    return this.Production.
    filter(Production => Production.idProduction==id).
    pop();
  }

  deleteProductionById(id: number):ProductionService{
    this.Production =  this.Production
    .filter(production=>production.idProduction!==id);
    return this;
  }
  updateProductionById(id: number,values:  object={}): ProductionModel{
    let production = this.getProductionById(id);
    if(!production){
      return null;
    }
  } 
}

//agregar lo de cow.service.ts