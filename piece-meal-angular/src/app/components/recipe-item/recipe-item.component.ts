import { Component, OnInit, Input } from '@angular/core';
//    {{recipe.instructions}}</div>
@Component({
  selector: 'app-recipe-item',
  template:`
  <div>
    <h2>{{recipe.name}}</h2>
    <ul *ngFor="let ingredient of recipe.ingredients">
      <li>{{ingredient.name}}</li>
    </ul>
    <div>
    <ul *ngFor="let instruction of recipe.instructions">
      <li>{{instruction}}</li>
    </ul>
  </div>
  `,
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;
  constructor() { }

  ngOnInit() {
  }
  //create function that gets recipe.instructions and
  //return an array of instructions
}
