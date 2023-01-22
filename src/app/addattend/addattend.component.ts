import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addattend',
  templateUrl: './addattend.component.html',
  styleUrls: ['./addattend.component.css']
})
export class AddattendComponent implements OnInit {
  public aclass:any
  public sdate:any
  public student:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.aclass=localStorage.getItem('aclass')!
    this.sdate=localStorage.getItem('sdate')!
    this.http.get<any>("http://localhost:3000/students")
    .subscribe((res)=>{
      const user=res.filter((a:any)=>{
        return a.class==this.aclass
       
        })
        if(user){
          this.student=user
      
        
        }
        else{
          alert("invalid student details")
         
        }
        },err=>{
          alert("something went wrong")
        })

      }

  }


