import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  template: `
    <div>
      <form (ngSubmit)="searchRecipe(query, $event)" #searchForm="ngForm">
        <input type="text" [(ngModel)]="query" name="query"/>
        <input type="submit" value="Search Recipe"/>
      </form>
    </div>
  `,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  query: string;
  @Output() onSearch: EventEmitter<string>;

  constructor() {
  this.query = 'cheese';
  this.onSearch = new EventEmitter();
}

searchRecipe(query, $event): void {
  $event.preventDefault();
  this.onSearch.emit(query);
}

}
