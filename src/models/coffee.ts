import { Drink } from "./drink";
import { Reporting } from "./reporting";

export class Coffee extends Drink {
    public description = "C::";
    public cost = 0.6;
    
    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
        if (this.ammountGiven >= this.cost) {
            Reporting.totalCoffees += 1;
        } 
    }

}