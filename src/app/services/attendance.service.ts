import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { take } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

export interface Attendance {
  uid: string;
  date: Date;
  action: string;
  memo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private _status$ = new BehaviorSubject<string>('LEAVING');

  constructor(
    private auth: AuthService
  ) {
    const idToken = this.auth.idToken;
    /*
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        const status = 'LEAVING';
        this._status$.next(status);
      } else {
        console.log('サインインして');
      }
    });
    */
  }

  attend(memo: string) {
    /*
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' attends at ' + date);
        const attendance: Attendance = {
          uid: u.uid,
          date: date,
          action: 'ATTEND',
          memo: memo.replace(/\n/g, '\\n')
        };
        this.firestore.collection<Attendance>('attendance').add(attendance);
        this._status$.next('ATTENDING');
      } else {
        console.log('サインインして');
      }
    });
    */
  }

  leave(memo: string) {
    /*
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' leaves at ' + date);
        const attendance: Attendance = {
          uid: u.uid,
          date: date,
          action: 'LEAVE',
          memo: memo.replace(/\n/g, '\\n')
        };
        this.firestore.collection<Attendance>('attendance').add(attendance);
        this._status$.next('LEAVING');
      } else {
        console.log('サインインして');
      }
    });
    */
  }

  comeBack() {
    /*
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' comes back at ' + date);
        const attendance: Attendance = {
          uid: u.uid,
          date: date,
          action: 'COMEBACK'
        };
        this.firestore.collection<Attendance>('attendance').add(attendance);
        this._status$.next('ATTENDING');
      } else {
        console.log('サインインして');
      }
    });
    */
  }

  takeBreak() {
    /*
    const date = new Date();
    this.auth.user.pipe(take(1)).subscribe((u: firebase.User) => {
      if (u) {
        console.log(u.displayName + ' takes a break at ' + date);
        const attendance: Attendance = {
          uid: u.uid,
          date: date,
          action: 'BREAK'
        };
        this.firestore.collection<Attendance>('attendance').add(attendance);
        this._status$.next('ONBREAK');
      } else {
        console.log('サインインして');
      }
    });
    */
  }
  get status() {
    return this._status$.asObservable();
  }
}
