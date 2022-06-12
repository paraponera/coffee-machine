import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Tea extends Drink {
    public description = "T::";
    public cost = 0.4;
    public waterRequired = 1;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            if (this.isEmpty('T')) {
               Drink.AmmountEarned -= this.cost;
            } else {
               Reporting.totalTeas += 1; 
            }
        } 
    }
}