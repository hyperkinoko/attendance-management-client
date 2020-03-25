import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import * as firebase from 'firebase';
import {AttendanceService} from './services/attendance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attendance-management-client';
}
