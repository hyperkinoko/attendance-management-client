import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  
  signOut() {
    this.auth.signOut();
  }

}
