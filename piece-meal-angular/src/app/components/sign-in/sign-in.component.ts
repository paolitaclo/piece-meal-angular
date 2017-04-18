import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials: ICredentials; //credentials is obj or atr and ICredentials is the type(from my interface)

  @Output() onSignIn: EventEmitter<ICredentials>;

  constructor(private router: Router) {
    this.credentials = {email: 'n_claros@gmail.com', password: 'luna'};
    this.onSignIn = new EventEmitter();
  }

  signInUser(credentials): void {
    this.onSignIn.emit(credentials);
  }
  btnClick(): void {
    this.router.navigateByUrl('/home');
  }
  wrappedFunctions(): any {
    this.signInUser(this.credentials);
    this.btnClick();
  }

  get diagnostic() { return JSON.stringify(this.credentials); }
}
