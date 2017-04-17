import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RecipesService {
  searchRecipesUrl: string = 'https://piecemeal-api.herokuapp.com/api/v1/search/recipes';

  constructor(private http: Http, private authentication: AuthenticationService) { }


  fetchRecipes(query): Promise<IRecipe[]> {
    console.log('Recipes to match: ', query);
    let headers = new Headers(
      {
        'Content-Type': 'application/json',
        'token': this.authentication.userInfo.token
      }
    );
    let options = new RequestOptions({
      headers: headers,
      params: {text: query}
    });

    return this.http.get(this.searchRecipesUrl, options)
    .toPromise()
    .then(response => {
      console.log('recipes found in API: ', response);
      return response.json().recipes;
    })
    // .then((arrRecipes) => {
    //   console.log('this is only array of recipes: ', arrRecipes.recipes);
    //   return arrRecipes.recipes;
    // })
    .catch((err) => {
      console.log(err);
    })
  }
}
// interface IRecipe {
//   id: number;
//   name: string;
//   ingredients: IIngredient[];
//   instructions: string;
// }
//
// interface IIngredient {
//   id: number;
//   name: string;
//   active: boolean;
//   tags: string[];
// }
