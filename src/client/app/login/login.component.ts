import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  submitted: boolean = false;

  doLogin() {
    console.log('doLogin', this.username, this.password);
    this.submitted = true;
  }
}
