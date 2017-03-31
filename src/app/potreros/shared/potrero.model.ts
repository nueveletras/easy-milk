export class Potrero {
    id: number;
    descripcion: string;
    area: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
