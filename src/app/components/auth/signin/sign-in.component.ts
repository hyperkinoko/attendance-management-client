import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  
  signIn() {
    this.auth.signInWithGoogle();
  }

}
