import { Component } from '@angular/core';
import { AuthorizationService } from 'src/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  oRegister: any = {};
  constructor(private authorizationService: AuthorizationService) {
  }

  register() {
    this.authorizationService.register(this.oRegister.email, this.oRegister.password);
  }
}
