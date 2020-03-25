import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from './auth.service';
import { take } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private _status$ = new BehaviorSubject<string>('LEAVING');

  constructor(
    private auth: AuthService
  ) { }
  
  attend() {
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' attends at ' + date);
        this._status$.next('ATTENDING');
      } else {
        console.log('サインインして');
      }
    });
  }
  
  leave() {
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' leaves at ' + date);
        this._status$.next('LEAVING');
      } else {
        console.log('サインインして');
      }
    });
  }
  
  comeBack() {
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' comes back at ' + date);
        this._status$.next('ATTENDING');
      } else {
        console.log('サインインして');
      }
    });
  }
  
  takeBreak() {
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' takes a break at ' + date);
        this._status$.next('ONBREAK');
      } else {
        console.log('サインインして');
      }
    });
  }
  get status() {
    return this._status$.asObservable();
  }
}
