import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, HeaderComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submitted=false;
  fg!: FormGroup;
  

  constructor(private fb:FormBuilder,private api:ApiService,private _router:Router){
    this.createForm()
  }

  createForm(){
    this.fg=this.fb.group({
      'userid':['',Validators.required],
      'pwd':['',Validators.required],
    })
  }

  validate(values:any){
    this.submitted=true;
    //console.log(this.fg.valid)
    if(this.fg.valid){
      console.log(values)
      this.api.validate(values).subscribe({
        next:resp=>{
        console.log(resp)
        localStorage.setItem("id",resp.id)
        localStorage.setItem("userid",resp.userid)
        localStorage.setItem("uname",resp.name)
        localStorage.setItem("role",resp.role)
        if(resp.role==='Admin'){
          this._router.navigate(['dashboard'])
        }
        else{
          this._router.navigate(['profile'])
        }
        },
      error:err=>{
        console.log(err)
        alert("Invalid username or password");
      }
    })
  }
  
  }
}
