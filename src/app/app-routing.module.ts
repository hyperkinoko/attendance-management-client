import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffTopComponent} from './components/staff-top/staff-top.component';
import {ManagerTopComponent} from './components/manager-top/manager-top.component';


const routes: Routes = [
  {path: '', component: StaffTopComponent},
  {path: 'manager', component: ManagerTopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
