import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  template: `
    <div *ngFor="let recipe of recipes">
      <app-recipe-item [recipe]="recipe"></app-recipe-item>
    </div>
  `
})

export class RecipesListComponent {
  @Input() recipes: IRecipe[];
  constructor() { }
}
