import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Chocolate extends Drink {
    public description = "H::";
    public cost = 0.5;
    public chocolateRequired = 2;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            if (this.isEmpty('H')) {
               Drink.AmmountEarned -= this.cost;
            } else {
               Reporting.totalChocolates += 1; 
            }
        } 
    }
}