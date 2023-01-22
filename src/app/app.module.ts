import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { ParenthomeComponent } from './parenthome/parenthome.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarklistComponent } from './marklist/marklist.component';
import { VmarkComponent } from './vmark/vmark.component';
import { VattendComponent } from './vattend/vattend.component';
import { AddattendComponent } from './addattend/addattend.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TeacherhomeComponent,
    ParenthomeComponent,
    AttendanceComponent,
    MarklistComponent,
    VmarkComponent,
    VattendComponent,
    AddattendComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
