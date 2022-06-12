export interface EmailNotifier {
	notifyMissingDrink(drink: string): void;
}

export interface BeverageQuantityChecker {
	isEmpty(drink: string): boolean;
}