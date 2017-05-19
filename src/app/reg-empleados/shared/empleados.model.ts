export class Empleados {
    name: string;
    lastName: string;
    idUser: number;
    documentType: string;
    document: string;
    phone: number;
    address: string;
    rol: string;
    hireDate: Date;
    fireDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }
}
