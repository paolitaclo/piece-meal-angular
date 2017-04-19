import { Component, OnInit, Input } from '@angular/core';
//    {{recipe.instructions}}</div>
@Component({
  selector: 'app-recipe-item',
  template: `
  <div class="container recipe-card">
    <div class="row">
      <div class="col-s-8 col-l-5 col-l-offset-3">
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">{{recipe.name}}</h3>
          </div>
          <div class="panel-body">
            <h5>Ingredients:</h5>
              <ul *ngFor="let ingredient of recipe.ingredients">
              <li>{{ingredient.name}}</li>
              </ul>
            <div>
              <h5>Instructions:</h5>
              <ul *ngFor="let instruction of recipe.instructions">
                <li>{{instruction}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {
  @Input() recipe: IRecipe;

  constructor() { }
}
