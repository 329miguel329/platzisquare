import { Component } from '@angular/core';
import { AuthorizationService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  oLogin: any = {};
  constructor(private authorizationService: AuthorizationService) {
  }

  login() {
    this.authorizationService.login(this.oLogin.email, this.oLogin.password);
  }
}
