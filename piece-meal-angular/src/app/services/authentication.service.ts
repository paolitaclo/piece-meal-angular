import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
  postUrl: string = 'http://piecemeal-api.herokuapp.com/api/v1/token';

  constructor(private http: Http) {
  }

  getToken(credentials: ICredentials): Promise<IUserInfo> {
    console.log('get token', credentials);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.postUrl, credentials, options)
    .toPromise()
    .then(response =>{
      console.log(response);
      return response.json();
    })
    .catch((err) =>{
      console.log(err);
    });
  }
}
