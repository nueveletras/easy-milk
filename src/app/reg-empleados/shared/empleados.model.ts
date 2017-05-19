export class Empleados {
    name: string;
    lastName: string;
    id: number;
    documentType: string;
    document: string;
    tel: number;
    address: string;
    rol: string;
    contractingDate: Date;
    fireDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }
}
