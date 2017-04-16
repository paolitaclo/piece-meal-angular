import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials: ICredentials; //credentials is obj or atr and ICredentials is the type(from my interface)

  @Output() onSignIn: EventEmitter<ICredentials>;

  constructor() {
    this.credentials = {email: '', password: ''};
    this.onSignIn = new EventEmitter();
  }

  signInUser(credentials): void {
    this.onSignIn.emit(credentials);
  }

  get diagnostic() { return JSON.stringify(this.credentials); }
}
