import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  public studentform!:FormGroup

  constructor(private router:Router,private formbuilder:FormBuilder,private http:HttpClient ) { }

  ngOnInit(): void {
    this.studentform=this.formbuilder.group({
      name:['',Validators.required],
      sroll:['',Validators.required],
      sclass:['',Validators.required]

    })
  }
 studentdetail(){
  
    
    this.http.post<any>("http://localhost:3000/students",this.studentform.value)
    .subscribe((res)=>{
      alert("student details added suucessfully");
      this.studentform.reset();
      this.router.navigateByUrl('teacherhome')
    },err=>{
      alert("something went wrong")
    }

  )}
  
  

}

