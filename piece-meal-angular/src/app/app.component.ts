import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-main-page *ngIf="userInfo; else signInPage">
    </app-main-page>
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
