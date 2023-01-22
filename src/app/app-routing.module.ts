import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddattendComponent } from './addattend/addattend.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarklistComponent } from './marklist/marklist.component';
import { ParenthomeComponent } from './parenthome/parenthome.component';
import { RegisterComponent } from './register/register.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { VattendComponent } from './vattend/vattend.component';
import { VmarkComponent } from './vmark/vmark.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path:'teacherhome',component:TeacherhomeComponent
  },
  {path:'parenthome',component:ParenthomeComponent},{
    path:'attendance',component:AttendanceComponent
  },
  {path:'marklist',component:MarklistComponent},
  {path:'vmark',component:VmarkComponent},
  {path:'vattend',component:VattendComponent},
  {path:'addattend',component:AddattendComponent},
  {path:'studentdetails',component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
