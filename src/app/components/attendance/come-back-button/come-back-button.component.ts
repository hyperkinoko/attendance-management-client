import { Component, OnInit } from '@angular/core';
import {AttendanceService} from '../../../services/attendance.service';

@Component({
  selector: 'app-come-back-button',
  templateUrl: './come-back-button.component.html',
  styleUrls: ['./come-back-button.component.scss']
})
export class ComeBackButtonComponent implements OnInit {

  constructor(
    private attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
  }

  comeBack() {
    this.attendanceService.comeBack();
  }
}
