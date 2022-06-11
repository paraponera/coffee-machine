import { Drink } from "./drink";

export class Tea extends Drink {
    public description = "T::";
    public cost = 0.4;

    constructor(ammountGiven: number){
        super();
        this.ammountGiven = ammountGiven;
    }
}