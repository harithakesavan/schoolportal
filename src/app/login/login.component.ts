import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    user:['',Validators.required]

  })

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router :Router ) { }

  ngOnInit(): void {
  }
login(){
  if(this.loginForm.valid){
    if(this.loginForm.value.user==="Teachers"){
      this.http.get<any>("http://localhost:3000/signupteacher")
      .subscribe((data)=>{
        const user=data.find((a:any)=>{
          return this.loginForm.value.email==a.email&&this.loginForm.value.password==a.password
        })
        if(user){
          this.router.navigateByUrl('teacherhome')
        }
        else{
          alert("user not found")
        }
      },err=>{
        alert("something went wrong")
      })
    }
    else{
      this.http.get<any>("http://localhost:3000/signupparent")
      .subscribe((data)=>{
        const user=data.find((a:any)=>{
          return this.loginForm.value.email==a.email&&this.loginForm.value.password==a.password
        })
        if(user){
          this.router.navigateByUrl('parenthome')
        }
        else{
          alert("user not found")
        }
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
