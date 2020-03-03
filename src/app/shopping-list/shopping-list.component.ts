import { Component, OnInit } from '@angular/core';
import { IngredientsModel } from '../shared/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientsModel[] = [{
    name: 'tomate',
    amount: 2,
    price: null
  },{
    name: 'fleisch',
    amount: 20,
    price: 2000
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
