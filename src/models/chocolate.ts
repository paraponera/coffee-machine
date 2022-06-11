import { Drink } from "./drink";

export class Chocolate extends Drink {
    public description = "H::";
    public cost = 0.5;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
    }
}