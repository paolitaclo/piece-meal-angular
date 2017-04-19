import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
@Component({
  selector: 'app-main-page',
  template: `
    <div clas="jumboton center-cubes">
      <app-navigation-bar (onSearch)="recipesFound($event)" ></app-navigation-bar>
      <app-recipes-list [recipes]="recipes"></app-recipes-list>
    </div>
  `,
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  recipes: IRecipe[];

  constructor(private recipesService: RecipesService) { }

  recipesFound(query) {
    this.recipesService.fetchRecipes(query)
      .then((recipes: IRecipe[]) => {
        console.log('recipes in main component', recipes);
        this.recipes = recipes;
      });
  }
}
