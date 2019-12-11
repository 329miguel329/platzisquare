import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizationService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.isLogged();
  }
  public login = (email, password) => {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Success login');
        console.log(response);
        this.router.navigate(['places']);
      }).catch((error) => {
        alert('Error');
        console.log(error);
      });
  }
  public register = (email, password) => {
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Success register');
        console.log(response);
      }).catch((error) => {
        alert('Error');
        console.log(error);
      });
  }
  public isLogged() {
    return this.fireAuth.authState;
  }
  public logout() {
    this.fireAuth.auth.signOut();
    alert('Cierre de sesión exitoso');
    this.router.navigate(['places']);
  }
  public getUser() {
    return this.fireAuth.auth;
  }
}
