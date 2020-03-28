import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SignInComponent} from './components/auth/signin/sign-in.component';
import {environment} from '../environments/environment';
import { SignOutComponent } from './components/auth/sign-out/sign-out.component';
import { AttendButtonComponent } from './components/attendance/attend-button/attend-button.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LeaveButtonComponent } from './components/attendance/leave-button/leave-button.component';
import {MatButtonModule} from '@angular/material/button';
import { ComeBackButtonComponent } from './components/attendance/come-back-button/come-back-button.component';
import { TakeBreakButtonComponent } from './components/attendance/take-break-button/take-break-button.component';
import { StaffTopComponent } from './components/staff-top/staff-top.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';
import {FlexModule} from '@angular/flex-layout';
import { ManagerTopComponent } from './components/manager-top/manager-top.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignOutComponent,
    AttendButtonComponent,
    LeaveButtonComponent,
    ComeBackButtonComponent,
    TakeBreakButtonComponent,
    StaffTopComponent,
    ManagerTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MarkdownModule.forRoot(),
    FlexModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
