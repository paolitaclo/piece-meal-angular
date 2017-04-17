import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  template: `
    <div *ngFor="let recipe of recipes"> Recipes Found:
      <app-recipe-item [recipe]="recipe"></app-recipe-item>
    </div>
  `,
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Input() recipes: IRecipe[];
  constructor() { }

}
