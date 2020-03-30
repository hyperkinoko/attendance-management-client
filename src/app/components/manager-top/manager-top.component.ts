import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Attendance} from '../../services/attendance.service';
import {Observable} from 'rxjs';
import * as admin from 'firebase-admin';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-manager-top',
  templateUrl: './manager-top.component.html',
  styleUrls: ['./manager-top.component.scss']
})
export class ManagerTopComponent implements OnInit {
  allUser$: Observable<admin.auth.UserRecord[]>;
  data$: Observable<Attendance[]>;
  selectedUid: string;

  constructor(
    private auth: AuthService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.allUser$ = this.auth.getAllUser();
    this.data$ = this.firestore.collection<Attendance>('attendance').valueChanges();
  }

}
