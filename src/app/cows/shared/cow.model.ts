export class Cow {
    id: number;
    name: string;
    birthDate: Date;
    buyDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
