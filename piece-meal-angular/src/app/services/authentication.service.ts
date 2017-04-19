import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService implements CanActivate {
  postUrl = 'https://piecemeal-api.herokuapp.com/api/v1/token';
  userInfo: IUserInfo;
  constructor(private http: Http, private router: Router) {
  }

  getToken(credentials: ICredentials): Promise<IUserInfo> {
    console.log('get token', credentials);
    const headers = new Headers({ 'Content-Type': 'application/json' }); // change let for const
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.postUrl, credentials, options)
    .toPromise()
    .then(response => {
      this.userInfo = response.json();
      console.log(this.userInfo);
      localStorage.setItem('user', JSON.stringify(this.userInfo))
      return this.userInfo;
    })
    .catch((err) => {
      console.log(err);
      return this.userInfo = undefined;
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.getUserInfo(this.userInfo)) {
      return true;
    }
    this.router.navigate(['/signIn'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
