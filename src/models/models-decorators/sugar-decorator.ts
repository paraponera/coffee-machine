import { Drink } from "../drink";
import { DrinkDecorators } from "./drink-decorators";

export class SugarDecorator extends DrinkDecorators {
    sugar: number;
    private readonly touillete: number = 1

    constructor(drink: Drink, sugar: number) {
        super();
        this.decoratedDrink = drink;
        this.sugar = sugar;
    }

    public getOrder(): string {
        return this.decoratedDrink.getOrder().replace('::',':'+this.sugar+':'+this.touillete);
    }

}