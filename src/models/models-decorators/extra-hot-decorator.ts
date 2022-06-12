import { Drink } from "../drink";
import { DrinkDecorators } from "./drink-decorators";

export class ExtraHotDecorator extends DrinkDecorators {
    constructor(drink: Drink){
        super();
        this.decoratedDrink = drink;
    }

    public getOrder(): string {
        if(this.decoratedDrink.getOrder().includes('missing')) {
            return this.decoratedDrink.getOrder();
        } else {
            return this.decoratedDrink.getOrder().replace(/:/,'h:');
        }
    }
}