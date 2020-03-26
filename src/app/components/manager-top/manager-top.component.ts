import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Attendance} from '../../services/attendance.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manager-top',
  templateUrl: './manager-top.component.html',
  styleUrls: ['./manager-top.component.scss']
})
export class ManagerTopComponent implements OnInit {
  data$: Observable<Attendance[]>;

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.data$ = this.firestore.collection<Attendance>('attendance').valueChanges();
  }

}
