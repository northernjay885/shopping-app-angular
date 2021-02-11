import {Recipe} from './recipes/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1'),
    new Recipe('Fried Rice', 'This is Fried Rice', 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
