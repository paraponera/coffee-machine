export abstract class Drink {
    public description: string;
    public cost: number;
    public ammountGiven: number;
    private readonly insufficientAmmount = 'M:Insufficient ammount, missing: ';

    public getOrder() : string {
        return this.invoice();
    };

    public invoice(): string {
        if (this.ammountGiven >= this.cost) {
            return this.description;
        } else {
            return this.insufficientAmmount + Math.abs(this.calculateMissingAmmount());
        }    
    }

    public calculateMissingAmmount(): number {
        return this.ammountGiven - this.cost;
    }
}