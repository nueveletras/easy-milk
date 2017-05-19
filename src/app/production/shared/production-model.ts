import { MilkQuality } from "app/calidad-leche/shared/milk-quality.model";

export class ProductionModel {
    idProduction: number;
    registerDate: Date;
    liters: number;
    idQuality: MilkQuality;
    idUserRegister: number;

    constructor(values: Object={}){
        Object.assign(this, values);
    }
    
}
