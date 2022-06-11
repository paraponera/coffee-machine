import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Orange extends Drink {
    public description = "O::";
    public cost = 0.6;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            Reporting.totalOrangeJuices += 1;
        }
    }
}