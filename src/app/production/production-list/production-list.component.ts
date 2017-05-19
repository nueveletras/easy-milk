import { Component, OnInit } from '@angular/core';
import { ProductionModel } from "app/production/shared/production-model";
import { ProductionService } from "app/production/shared/production.service";
import { MilkQuality } from "app/calidad-leche/shared/milk-quality.model";
import { MilkQualityService } from "app/calidad-leche/shared/milk-quality.service";

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit {

  qualityList: MilkQuality[];

  idProduction :ProductionModel;
  idList: ProductionModel[];
  isEdit:boolean;
  errorMessage: any;

  constructor(private productionService: ProductionService,
  private milkQualityService: MilkQualityService) { }


  ngOnInit() {
    this.idProduction =new ProductionModel();
    this.idList= this.productionService.getAllProductions();
    this.isEdit=false;
    this.getAllQualities();
  }

  getAllQualities() {
    return this.milkQualityService.getAllQualities()
      .subscribe(
      quality => this.qualityList = quality,
      errorVariable => this.errorMessage = errorVariable = <any>errorVariable
      )
  }

}
