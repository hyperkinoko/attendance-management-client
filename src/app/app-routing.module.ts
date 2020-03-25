import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffTopComponent} from './components/staff-top/staff-top.component';


const routes: Routes = [
  {path: '', component: StaffTopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
