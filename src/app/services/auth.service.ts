import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _user: Observable<firebase.User> = this.angularfireAuth.authState;

  endpointName = '';
  clientId     = '';
  redirectUri  = '';

  signedIn = false;
  signedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.signedIn);
  idToken = '';
  idToken$: BehaviorSubject<string> = new BehaviorSubject<string>(this.idToken);

  constructor(private router: Router) {
    this.endpointName = environment.endpointName;
    this.clientId = environment.clientId;
    this.redirectUri = environment.redirectUri;
  }

  signOut() {
    this.signedIn = false;
    this.signedIn$.next(this.signedIn);
    this.idToken = '';
    this.idToken$.next(this.idToken);
  }

  signIn() {
    // tslint:disable-next-line:max-line-length
    window.location.href = 'https://' +
      this.endpointName + '/login?' +
      'response_type=token&' +
      'client_id=' + this.clientId + '&' +
      'redirect_uri=' + this.redirectUri + '&' +
      'scope=openid+email';
  }

  parseToken(hashData) {
    if (hashData.length > 0) {
      const hashs = hashData.split('&');
      const vars = {
        id_token: ''
      };
      for (const hash of hashs) {
        const array = hash.split('=');
        vars[array[0]] = array[1];
      }
      if (vars.id_token !== '') {
        this.idToken = vars.id_token;
        this.idToken$.next(this.idToken);
        this.signedIn = true;
        this.signedIn$.next(this.signedIn);
        this.router.navigate(['/']);
      } else {
        window.console.log('no id_token');
      }
    } else {
      window.console.log('no hash');
    }
  }

  getObservableStatus(): Observable<boolean> {
    return this.signedIn$.asObservable();
  }

  isSignedIn(): boolean {
    return this.signedIn;
  }

  get token(): string {
    return this.idToken;
  }

  get user(): string {
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(this.idToken);
    console.log(decoded);
    return 'test@example.com'; // return this._user;
  }
}
