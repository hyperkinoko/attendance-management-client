import {Component, Input, OnInit} from '@angular/core';
import {AttendanceService} from '../../../services/attendance.service';

@Component({
  selector: 'app-leave-button',
  templateUrl: './leave-button.component.html',
  styleUrls: ['./leave-button.component.scss']
})
export class LeaveButtonComponent implements OnInit {
  @Input() memo = '';

  constructor(
    private attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
  }
  
  leave() {
    this.attendanceService.leave(this.memo);
  }

}
