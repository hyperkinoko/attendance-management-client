import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SignInComponent} from './components/auth/signin/sign-in.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { SignOutComponent } from './components/auth/sign-out/sign-out.component';
import { AttendButtonComponent } from './components/attendance/attend-button/attend-button.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LeaveButtonComponent } from './components/attendance/leave-button/leave-button.component';
import {MatButtonModule} from '@angular/material/button';
import { ComeBackButtonComponent } from './components/attendance/come-back-button/come-back-button.component';
import { TakeBreakButtonComponent } from './components/attendance/take-break-button/take-break-button.component';
import { StaffTopComponent } from './components/staff-top/staff-top.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignOutComponent,
    AttendButtonComponent,
    LeaveButtonComponent,
    ComeBackButtonComponent,
    TakeBreakButtonComponent,
    StaffTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
