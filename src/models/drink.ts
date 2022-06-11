import { Reporting } from "./reporting";

export abstract class Drink {
    public description: string;
    public cost: number;
    public ammountGiven: number;
    static AmmountEarned = 0;
    private readonly insufficientAmmount = 'M:Insufficient ammount, missing: ';

    public getOrder() : string {
        return this.invoice();
    };

    public invoice(): string {
        if (this.ammountGiven >= this.cost) {
            Drink.AmmountEarned += this.cost; 
            return this.description;
        } else {
            return this.insufficientAmmount + Math.abs(this.calculateMissingAmmount());
        }    
    }

    public calculateMissingAmmount(): number {
        return this.ammountGiven - this.cost;
    }

    public getTotalMoney(): string {
        return Drink.AmmountEarned.toFixed(2);
    }

    public getTotalOfDrinks(): string {
        return 'Total : Coffee => '+Reporting.totalCoffees+' | Orange juice => '+Reporting.totalOrangeJuices+' | Chocolate => '+Reporting.totalChocolates+' | Tea => '+Reporting.totalTeas;
    }
    
}