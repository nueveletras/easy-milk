export class Empleados {
    name: string;
    id: number;
    tel: number;
    adress: string;
    rol: string;
    ContractingDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }
}
