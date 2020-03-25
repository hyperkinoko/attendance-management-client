import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: Observable<firebase.User> = this.angularfireAuth.authState;

  constructor(
    private angularfireAuth: AngularFireAuth
  ) { }
  
  signInWithGoogle() {
    this.angularfireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  signOut() {
    this.angularfireAuth.signOut();
  }
  
  get user() {
    return this._user;
  }
}
