import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from './authentication.service';

function instructionsIntoArr(instructions: string) {
  const stringSplited = instructions.split(/\d+./g);
  const result = stringSplited.filter(step => step.length > 0);
  return result;
}

@Injectable()
export class RecipesService {
  searchRecipesUrl = 'https://piecemeal-api.herokuapp.com/api/v1/search/recipes';

  constructor(private http: Http, private authentication: AuthenticationService) { }


  fetchRecipes(query): Promise<IRecipe[]> {
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'token': this.authentication.userInfo.token
      }
    );
    const options = new RequestOptions({
      headers: headers,
      params: {text: query}
    });

    return this.http.get(this.searchRecipesUrl, options)
    .toPromise()
    .then(response => {
      return response.json().recipes;
    })
    .then((recipesArr) => {
      const newArrRec = recipesArr.map((obj) => {
        const recipeObj = Object.assign({}, obj, {
          instructions: instructionsIntoArr(obj.instructions)
        });
        return recipeObj;
      });
      return newArrRec;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
