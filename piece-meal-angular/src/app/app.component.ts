import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="">
    <div class="navbar navbar-default">
      <div class="container">
        <div class="navbar-left">
          <button class="" (click)="logOut()" *ngIf="authenticationService.userInfo" name="logOut">Log Out</button>
        </div>
      </div>
    </div>
    <div class="">
      <app-main-page *ngIf="authenticationService.userInfo; else signInPage">
      </app-main-page>
      <ng-template #signInPage>
        <app-sign-in (onSignIn)="userSignedIn($event)" ></app-sign-in>
      </ng-template>
    </div>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userInfo: IUserInfo;

  constructor(private authenticationService: AuthenticationService){ }

  userSignedIn(credentials: ICredentials) {
    this.authenticationService.getToken(credentials)
    .then(userInfoRes => this.userInfo=userInfoRes);
  }

  logOut(): void {
    this.authenticationService.userLogOut(this.userInfo);
  }

  ngOnInit() {
    this.authenticationService.getUserInfo(this.userInfo);
  }
}
