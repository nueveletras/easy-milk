export class RegNovedadesSalud {
    diseaseType:string;
    sickCowsNumber:number;
    paddockID: number;
    diseaseDiscoveryDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
