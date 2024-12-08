import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  submitted=false;
  fg!: FormGroup;

  constructor(private fb:FormBuilder,private api:ApiService,private _router:Router,private toast:ToastrService){
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
      'role':['Student']
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
          this._router.navigate(['students'])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Something bad happened',"Registration Failed")
      }
    })
  }
  }
}
