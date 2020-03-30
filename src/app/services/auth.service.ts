import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';
import * as firebase from 'firebase/app';
import * as admin from 'firebase-admin';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: Observable<firebase.User> = this.angularfireAuth.authState;

  constructor(
    private angularfireAuth: AngularFireAuth
  ) {
    const app = admin.initializeApp();
    console.log(app);
  }
  
  signInWithGoogle() {
    this.angularfireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  signOut() {
    this.angularfireAuth.signOut();
  }
  
  get user() {
    return this._user;
  }
  
  getAllUser(): Observable<admin.auth.UserRecord[]> {
    return from(admin.auth().listUsers(100))
      .pipe(map((result: admin.auth.ListUsersResult) => result.users));
  }
}
