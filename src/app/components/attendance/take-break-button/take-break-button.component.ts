import { Component, OnInit } from '@angular/core';
import {AttendanceService} from '../../../services/attendance.service';

@Component({
  selector: 'app-take-break-button',
  templateUrl: './take-break-button.component.html',
  styleUrls: ['./take-break-button.component.scss']
})
export class TakeBreakButtonComponent implements OnInit {

  constructor(
    private attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
  }
  
  takeBreak() {
    this.attendanceService.takeBreak();
  }

}
