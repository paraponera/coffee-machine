import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Orange extends Drink {
    public description = "O::";
    public cost = 0.6;
    public orangeRequired = 3;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            if (this.isEmpty('O')) {
               Drink.AmmountEarned -= this.cost;
            } else {
               Reporting.totalOrangeJuices += 1; 
            }
        } 
    }
}