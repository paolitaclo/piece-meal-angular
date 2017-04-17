import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  template:`<div>{{recipe.name}}</div>`,
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;
  constructor() { }

  ngOnInit() {
  }

}
