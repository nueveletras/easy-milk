import { Cow } from "app/cows/shared/cow.model";

export class Novedades {
    vaca: Cow;
    newDate: Date;
    veterinario: string;
    novedad: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
