import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Coffee extends Drink {
    public description = "C::";
    public cost = 0.6;
    public milkRequired = 1;
    public waterRequired = 1;
    
    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            if (this.isEmpty('C')) {
               Drink.AmmountEarned -= this.cost;
            } else {
               Reporting.totalCoffees += 1; 
            }
        } 
    }

}