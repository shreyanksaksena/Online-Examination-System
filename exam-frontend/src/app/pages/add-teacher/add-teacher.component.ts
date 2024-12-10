import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  submitted=false;
  fg!: FormGroup;

  constructor(private fb:FormBuilder,private api:ApiService,private _router:Router){
    this.createForm()
  }

  createForm(){
    this.fg=this.fb.group({
      'userid':['',Validators.required],
      'uname':['',Validators.required],
      'gender':['',Validators.required],
      'address':['',Validators.required],
      'phone':['',Validators.required],
      'pwd':['',Validators.required],
      'role':['Teacher']
    })
  }

  registeruser(values:any){
    this.submitted=true
    if(this.fg.valid){
      console.log(values)
      this.api.register(values).subscribe({
        next:resp=>{
        console.log(resp)
        alert('Registered successfully')        
          this._router.navigate(['teachers'])
        },
      error:err=>{
        console.log(err)
      }
    })
  }
  }
}
