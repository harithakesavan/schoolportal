import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  @ViewChild('aclass') aclassKey!:ElementRef
 @ViewChild('sdate') sdateKey!:ElementRef
 public attendform!:FormGroup

  constructor( private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.attendform=this.formbuilder.group({
      aclass:['',[Validators.required]],
      sdate:['',[Validators.required]]
    })
  }


attend(){
  if(this.attendform.valid){
    
localStorage.setItem("aclass",this.aclassKey.nativeElement.value);
localStorage.setItem("sdate",this.sdateKey.nativeElement.value);
this.router.navigateByUrl('addattend')
    

}
  else{
    alert("invalid form")
  }
}
}
