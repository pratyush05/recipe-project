import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { forEach } from '@angular/router/src/utils/collection';

// @Injectable()
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  constructor() { }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name.valueOf(), ingredient.amount.valueOf()));
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  private mergeDuplicateIngredients() {
    for (let i = 0; i < this.ingredients.length - 1; i += 1) {
      let isAlreadyPresent = false;
      for (let j = i + 1; j < this.ingredients.length; j += 1) {
        if (this.ingredients[i].name.toUpperCase() === this.ingredients[j].name.toUpperCase()) {
          isAlreadyPresent = true;
          this.ingredients.push(new Ingredient(listIngredient.name.valueOf(),
            listIngredient.amount.valueOf() + newIngredient.amount.valueOf()));
        }
      });
    });
  }
}
