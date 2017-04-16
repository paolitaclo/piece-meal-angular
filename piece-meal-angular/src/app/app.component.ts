import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
// <app-sign-in (onSignIn)="userSignedIn($event)" *ngIf="!userInfo; else navBar"></app-sign-in>
// <ng-template #navBar>with token: {{ userInfo && userInfo.token }}</ng-template>
@Component({
  selector: 'app-root',
  template: `
  <div>
    <p *ngIf="userInfo; else signInPage">
      with token: {{ userInfo && userInfo.token }}
      </p>
    <ng-template #signInPage>
      <app-sign-in (onSignIn)="userSignedIn($event)" ></app-sign-in>
    </ng-template>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfo: IUserInfo;

  constructor(private authenticationService: AuthenticationService){ }

  userSignedIn(credentials: ICredentials) {
    this.authenticationService.getToken(credentials)
    .then(userInfoRes => this.userInfo=userInfoRes);
  }
}
