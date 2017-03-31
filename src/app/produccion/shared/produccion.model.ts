import { Cow } from "app/cows/shared/cow.model";

export class Produccion {
    cow: Cow;
    cantidad: number;
    regDate: Date;
    calidad: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
