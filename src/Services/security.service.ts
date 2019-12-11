import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from './auth.service';

@Injectable()
export class Security implements CanActivate {
  loggedIn = false;
  constructor(private authService: AuthorizationService) {
    this.authService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        console.log(error);
        this.loggedIn = false;
      });
  }
  canActivate() {
    return this.loggedIn;
  }
}
