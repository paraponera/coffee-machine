import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Chocolate extends Drink {
    public description = "H::";
    public cost = 0.5;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            Reporting.totalChocolates += 1;
        }
    }
}