import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  signupForm=this.formBuilder.group({
    fullname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    mobile:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(10)]],
    user:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {


  }
  signUp(){
    if(this.signupForm.valid){
      if(this.signupForm.value.user==="Teachers"){
      this.http.post<any>("http://localhost:3000/signupteacher",this.signupForm.value)
      .subscribe((data)=>{
        alert("registered successfully")
        this.router.navigateByUrl('login')
      },err=>{
        alert("something went wrong")
      })
    }
    else{
      this.http.post<any>("http://localhost:3000/signupparent",this.signupForm.value)
      .subscribe((data)=>{
        alert("registered successfully")
        this.router.navigateByUrl('login')
      },err=>{
        alert("something went wrong")
      })

    }
     
    }
    else{
      alert("invalid form")
    }

  }
}
