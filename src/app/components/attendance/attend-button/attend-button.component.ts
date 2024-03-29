import {Component, Input, OnInit} from '@angular/core';
import {AttendanceService} from '../../../services/attendance.service';

@Component({
  selector: 'app-attend-button',
  templateUrl: './attend-button.component.html',
  styleUrls: ['./attend-button.component.scss']
})
export class AttendButtonComponent implements OnInit {
  @Input() memo = '';
  

  constructor(
    private attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
  }

  attend() {
    this.attendanceService.attend(this.memo);
  }
}
