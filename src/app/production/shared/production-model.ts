import { MilkQuality } from "app/calidad-leche/shared/milk-quality.model";
import { Empleados } from "app/reg-empleados/shared/empleados.model";

export class ProductionModel {
    idProduction: number;
    registerDate: Date;
    liters: number;
    idQuality: MilkQuality;
    idUserRegister: Empleados;

    constructor(values: Object={}){
        Object.assign(this, values);
    }
    
}
