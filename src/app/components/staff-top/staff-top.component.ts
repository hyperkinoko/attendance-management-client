import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {AttendanceService} from '../../services/attendance.service';

@Component({
  selector: 'app-staff-top',
  templateUrl: './staff-top.component.html',
  styleUrls: ['./staff-top.component.scss']
})
export class StaffTopComponent implements OnInit {
  memo: string;

  user$: string;
  status$: Observable<string>;

  constructor(
    private authService: AuthService,
    private attendaceService: AttendanceService
  ) {
    this.user$ = this.authService.user;
    this.status$ = this.attendaceService.status;
  }

  ngOnInit(): void {
  }

}
