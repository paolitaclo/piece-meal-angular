import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
  postUrl: string = 'https://piecemeal-api.herokuapp.com/api/v1/token';
  userInfo: IUserInfo;
  constructor(private http: Http) {
  }

  getToken(credentials: ICredentials): Promise<IUserInfo> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.postUrl, credentials, options)
    .toPromise()
    .then(response => {
      this.userInfo = response.json();
      localStorage.setItem('user', JSON.stringify(this.userInfo));
      return this.userInfo;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getUserInfo(userInfo: IUserInfo): any {
    if (this.userInfo) {
      return this.userInfo;
    } else {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      return this.userInfo;
    }
  }
  userLogOut(userInfo: IUserInfo): any {
    localStorage.removeItem('user');
    this.userInfo = undefined;
  }
}
