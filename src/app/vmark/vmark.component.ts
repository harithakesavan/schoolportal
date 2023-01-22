import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vmark',
  templateUrl: './vmark.component.html',
  styleUrls: ['./vmark.component.css']
})
export class VmarkComponent implements OnInit {
  public roll:string=""
  public sclass:string=""
  public student:any

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.roll=localStorage.getItem("roll")!;
    this.sclass=localStorage.getItem("sclass")!;
    this.roll=localStorage.getItem('roll')!;
 this.http.get<any>("http://localhost:3000/mark")
 .subscribe((res)=>{
  const user=res.find((a:any)=>{
  return a.roll==this.roll&&a.class==this.sclass
  })
  if(user){
    this.student=user

  
  }
  else{
    alert("invalid student details")
    this.router.navigateByUrl('teacherhome')
  }
  },err=>{
    alert("something went wrong")
  })
}
}
 


