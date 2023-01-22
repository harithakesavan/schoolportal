import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {
 @ViewChild('roll') rollKey!:ElementRef
 @ViewChild('sclass') classKey!:ElementRef

public rollno:any
  markform=this.formBuilder.group({
    roll:['',Validators.required],
    sclass:['',Validators.required]
  })
  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
attend(){
  
this.router.navigateByUrl('attendance')
}
mark(){
  this.router.navigateByUrl('marklist')
}
vattend(){

}
vmark(){
  if(this.markform.valid){
    
localStorage.setItem("roll",this.rollKey.nativeElement.value);
localStorage.setItem("sclass",this.classKey.nativeElement.value);
this.router.navigateByUrl('vmark')
    

}
  else{
    alert("invalid form")
  }
}
adddetail()
{
  this.router.navigateByUrl('studentdetails')
}}
