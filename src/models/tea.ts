import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Tea extends Drink {
    public description = "T::";
    public cost = 0.4;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            Reporting.totalTeas += 1;
        }
    }
}