import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chocolate } from 'src/models/chocolate';
import { Coffee } from 'src/models/coffee';
import { Drink } from 'src/models/drink';
import { ExtraHotDecorator } from 'src/models/models-decorators/extra-hot-decorator';
import { SugarDecorator } from 'src/models/models-decorators/sugar-decorator';
import { Orange } from 'src/models/orange';
import { Tea } from 'src/models/tea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Coffee machine';
  drink: Drink;
  sugar: number = 0;
  extraHot: boolean = false;

  ammount = new FormControl();

  selectedDrink = '';
  description = '';
  totatDrinks = '';
  totalMoney = '';
  initReport = false;

  ngOnInit() {
    // Tests sur la console.

    let coffee = new Coffee(0.1);
    console.log("1 => ", coffee.getOrder());
    coffee = new SugarDecorator(coffee, 1);
    console.log("2 => ",coffee.getOrder());
    coffee = new ExtraHotDecorator(coffee);
    console.log("3 => ",coffee.getOrder());

    coffee = new Coffee(2);
    console.log("4 => ",coffee.getOrder());
    coffee = new ExtraHotDecorator(coffee);
    console.log("5 => ",coffee.getOrder());
    coffee = new SugarDecorator(coffee, 2);
    console.log("6 => ",coffee.getOrder());
    

    let chocolate = new Chocolate(1);
    console.log("7 => ",chocolate.getOrder());
    chocolate = new ExtraHotDecorator(chocolate);
    console.log("8 => ",chocolate.getOrder());
    chocolate = new SugarDecorator(chocolate, 2);
    console.log("9 => ",chocolate.getOrder());

    let tea = new Tea(4);
    console.log("10 => ",tea.getOrder());
    tea = new SugarDecorator(tea, 2);
    console.log("11 => ",tea.getOrder());
    tea = new ExtraHotDecorator(tea);
    console.log("12 => ",tea.getOrder());

    let orange = new Orange(1);
    console.log("13 => ",orange.getOrder());
    orange = new SugarDecorator(orange,2);
    console.log("14 => ",orange.getOrder());

    console.log(orange.getTotalOfDrinks());
    console.log("total => ",orange.getTotalMoney());
  }


  selectDrink(typeOfDrink: string) {
    this.selectedDrink = typeOfDrink;
    this.extraHot = false;
    this.sugar = 0;
  }

  getDrink() {
    switch(this.selectedDrink) {
      case 'C':
        this.drink = new Coffee(this.ammount.value);
        break;
      case 'O':
        this.drink = new Orange(this.ammount.value);
        break;
      case 'T':
        this.drink = new Tea(this.ammount.value);
        break;
      case 'H':
        this.drink = new Chocolate(this.ammount.value);
        break;
      default:
        console.log("Out of scope");
        break;
    }

    if (this.extraHot) {
      this.drink = new ExtraHotDecorator(this.drink);
    }

    if (this.sugar > 0) {
      this.drink = new SugarDecorator(this.drink, this.sugar);
    }

    this.description = this.drink.getOrder();
    this.initReport = true;
  }

  addSugar() {
    if (this.sugar < 2) {
      this.sugar += 1;
    } else {
      this.sugar = 0;
    }
  }

  disableDoingDrink() {
    return this.selectedDrink === '' || this.ammount.value === null;
  }

  showReport() {
    this.totalMoney = this.drink.getTotalMoney();
    this.totatDrinks = this.drink.getTotalOfDrinks();

    console.log(this.drink.getTotalOfDrinks());
    console.log("total => ",this.drink.getTotalMoney());
  }

}
