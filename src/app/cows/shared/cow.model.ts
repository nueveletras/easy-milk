import { GroupCow } from "app/groups-cows/shared/group-cow.model";

export class Cow {
    id: number;
    name: string;
    birthDate: Date;
    buyDate: Date;
    idGroupCow: GroupCow;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
