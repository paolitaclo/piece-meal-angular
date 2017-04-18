import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
// <ng-template #signInPage>
//   <app-sign-in (onSignIn)="userSignedIn($event)" ></app-sign-in>
// </ng-template>
// <app-main-page>
// </app-main-page>
@Component({
  selector: 'app-root',
  template: `
  <div class="app-container">
    <nav class="navbar navbar-default custom">
      <div class="row">
        <div class="col-xs-6 col-s-6 col-md-6 brand brand-name">
          <a class="anchor" href="#">PIECE MEAL</a>
        </div>
        <div class="col-xs-2 col-md-2 logo-div">
              <img class="logo-image" alt="Brand" src="../assets/images/icon-food.png">
              </div>
        <div class="col-xs-4 col-md-4 button-right">
          <button class="btn btn-primary btn-lg" (click)="logOut()"
          *ngIf="authenticationService.userInfo" name="logOut" [routerLink]="['signIn']">Log Out</button>
        </div>
      </div>
    </nav>
    <div class="main-image">
    </div>
    <div><router-outlet></router-outlet></div>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userInfo: IUserInfo;

  constructor(private authenticationService: AuthenticationService, private router: Router){ }

  userSignedIn(credentials: ICredentials) {
    this.authenticationService.getToken(credentials)
    .then(userInfoRes => this.userInfo = userInfoRes);
  }

  logOut(): void {
    this.authenticationService.userLogOut(this.userInfo);
  }

  ngOnInit() {
    this.authenticationService.getUserInfo(this.userInfo);
  }
}
