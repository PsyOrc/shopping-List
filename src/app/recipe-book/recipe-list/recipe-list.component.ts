import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    { name: 'Pizza',
    description: 'Teig Rollen belegen, Backen, Mampfen',
    imagePath: 'https://www.lieferando.de/foodwiki/uploads/sites/8/2018/01/pizza-3.jpg',
    ingredients: [
      {name: 'salami',
      amount: 2,
      price: 2.99
      },
      {name: 'Tomate',
      amount: 1,
      price: 45.97
    }, ],
    },
    { name: 'Lasange',
    description: 'Lecker Lecker Lasagne Bäcker',
    imagePath: 'https://www.daskochrezept.de/sites/default/files/styles/169_xl/public/rezepte/2010/4/Hackfleisch-Lasagne-4bd938182a93f.jpg?itok=I26adcE8',
    ingredients: [
      {name: 'salami',
      amount: 2,
      price: 2.99
      },
      {name: 'Tomate',
      amount: 1,
      price: 45.97
    }, ],
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
