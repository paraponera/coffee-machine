import { Drink } from "../drink";

export abstract class DrinkDecorators extends Drink {
    public decoratedDrink: Drink;
    public abstract getOrder(): string;
}