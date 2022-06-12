import { BeverageQuantityChecker, EmailNotifier } from "src/services/coffee-machine-services";
import { Reporting } from "./reporting";

export abstract class Drink implements EmailNotifier, BeverageQuantityChecker {
    public description: string;
    public cost: number;
    public ammountGiven: number;
    static AmmountEarned = 0;

    // Qte totale des ingrédients de base
    static waterQty = 10;
    static milkQty = 10;
    static orangeQty = 15;
    static chocolateQty = 15;

    //Qte nécessaire pour préparer une boisson
    public milkRequired = 0;
    public waterRequired = 0;
    public orangeRequired = 0;
    public chocolateRequired = 0;


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

    public notifyMissingDrink(drink: string): void {
        this.description = 'M:'+drink+" is missing";
        console.log('M:'+drink+" is missing");
    }

    public isEmpty(drink: string): boolean {
        switch(drink) {
            case 'C':
              if (this.milkRequired <= Drink.milkQty && this.waterRequired <= Drink.waterQty) {
                Drink.waterQty -= this.waterRequired;
                Drink.milkQty -= this.milkRequired;
                return false;
              } else {
                this.notifyMissingDrink(drink);
                return true;
              }
            case 'O':
                if (this.orangeRequired <= Drink.orangeQty) {
                    Drink.orangeQty -= this.orangeRequired;
                    return false;
                  } else {
                    this.notifyMissingDrink(drink);
                    return true;
                  }
            case 'T':
                if (this.waterRequired <= Drink.waterQty) {
                    Drink.waterQty -= this.waterRequired;
                    return false;
                  } else {
                    this.notifyMissingDrink(drink);
                    return true;
                  }
            case 'H':
                if (this.chocolateRequired <= Drink.chocolateQty) {
                    Drink.chocolateQty -= this.chocolateRequired;
                    return false;
                  } else {
                    this.notifyMissingDrink(drink);
                    return true;
                  }
            default:
              console.log("Out of scope");
              break;
          }
        return true;
    }
    
}