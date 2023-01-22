import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marklist',
  templateUrl: './marklist.component.html',
  styleUrls: ['./marklist.component.css']
})
export class MarklistComponent implements OnInit {
  addmarkform=this.formBuilder.group({
    name:['',Validators.required],
    roll:['',Validators.required],
    class:['',Validators.required],
    sub1:['',Validators.required],
    mark1:['',Validators.required],
    sub2:['',Validators.required],
    mark2:['',Validators.required],
    sub3:['',Validators.required],
    mark3:['',Validators.required],
    sub4:['',Validators.required],
    mark4:['',Validators.required],


  })

  constructor( private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
addmark(){
  this.http.post<any>("http://localhost:3000/mark",this.addmarkform.value)
.subscribe((data)=>{
  alert("marklist added successfully")
  this.router.navigateByUrl('teacherhome')
},err=>{
  alert("something went wrong")
})
}
}
