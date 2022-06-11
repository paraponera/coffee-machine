import { Drink } from "./drink";

export class Coffee extends Drink {
    public description = "C::";
    public cost = 0.6;
    
    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
    }
}