import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from './authentication.service';

function instructionsIntoArr(instructions: string) {
    let stringSplited = instructions.split(/\d+./g);
    let result = stringSplited.filter(step => step.length>0);
    return result;
}

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
    .then((recipesArr) => {
      let newArrRec = recipesArr.map((obj) => {
        let recipeObj = Object.assign({}, obj, {instructions: instructionsIntoArr(obj.instructions)});
        return recipeObj;
      });
      console.log(newArrRec);
      return newArrRec;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
