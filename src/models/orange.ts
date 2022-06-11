import { Drink } from "./drink";

export class Orange extends Drink {
    public description = "O::";
    public cost = 0.6;
    
    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
    }
}