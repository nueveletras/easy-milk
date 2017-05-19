import { TestBed, inject } from '@angular/core/testing';

import { ProductionService } from './production.service';
import { ProductionModel } from "app/production/shared/production-model";

describe('ProductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionService]
    });
  });

  it('should ...', inject([ProductionService], (service: ProductionService) => {
    expect(service).toBeTruthy();
  }));
  describe('#getAllProductions()',() =>{
    it('should return an empityarray by defaul',inject([ProductionService],(service: ProductionService)=>{
      expect(service.getAllProductions()).toEqual([]);
    }));
    it('should return all production', inject([ProductionService], (service: ProductionService) =>{
      let production1= new ProductionModel({id: 12, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      let production2= new ProductionModel({id: 13, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      service.addProduction(production1);
      service.addProduction(production2);
      expect(service.getAllProductions()).toEqual([production1, production2]);
        }));
  });

  describe('#save(production)', () =>{
    it('should  save  a production', inject([ProductionService], (service: ProductionService) =>{
      let production1= new ProductionModel({id: 12, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      let production2= new ProductionModel({id: 13, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      service.addProduction(production1);
      service.addProduction(production2);
      expect(service.getProductionById(12)).toEqual(production1);
      expect(service.getProductionById(12)).toEqual(production2);
    }));
  });

  describe ('#deleteProductionById(id)', () =>{
    it('should  remove aproduction with the corresponding id', inject([ProductionService], (Service: ProductionService)=>{
      let production1= new ProductionModel({id: 12, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      let production2= new ProductionModel({id: 13, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      Service.addProduction(production1);
      Service.addProduction(production2);
      expect(Service.getAllProductions()).toEqual([production1,production2]);
      Service.deleteProductionById(12);
      expect(Service.getAllProductions()).toEqual([production1]);
      Service.deleteProductionById(13);
      expect(Service.getAllProductions()).toEqual([]);
    }));

    it('should not removing anything if production corresponding id is not found', inject([ProductionService], (service: ProductionService)=>{
      let production1= new ProductionModel({id: 12, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      let production2= new ProductionModel({id: 13, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      service.addProduction(production1);
      service.addProduction(production2);
      expect(service.getAllProductions()).toEqual([production1, production2]);
      service.deleteProductionById(12);
      expect(service.getAllProductions()).toEqual([production1,production2]);
    }));
  });

  describe('#updateProductionById(id, values)', ()=>{
    it('should return  a production with the corresponding id and update data', inject([ProductionService], (service: ProductionService)=>{
      let production1= new ProductionModel({id: 12, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      service.addProduction(production1);
      let updateProduction = service.updateProductionById(12, {
        MilkQuantity: 20
      });
      expect(updateProduction.MilkQuantity).toEqual('20');
    }));
    it('should return null ifproduction is not found',  inject([ProductionService], (service: ProductionService)=>{
      let production1= new ProductionModel({id: 12, MilkQuantity: 12, ExtractDate:'08/14/2013'});
      service.addProduction(production1);
      let updateProduction= service.updateProductionById(12, {
        MilkQuantity: 30
      });
      expect(updateProduction).toEqual(null);
    }));
  });

});
