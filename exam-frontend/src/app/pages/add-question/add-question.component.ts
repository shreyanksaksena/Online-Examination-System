import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent {
  fg!: FormGroup;
  cats!:any[]

  constructor(private api:ApiService,private router:Router,private fb:FormBuilder){
    this.createForm()
    this.api.listallcategories().subscribe(resp=>{
      this.cats = resp
    })
  }

  createForm(){
    this.fg = this.fb.group({
      'description':['',Validators.required],
      'option1':['',Validators.required],
      'option2':['',Validators.required],
      'option3':['',Validators.required],
      'option4':['',Validators.required],
      'answer':['',Validators.required],
      'marks':['',Validators.required],
      'catid':['',Validators.required],
    })
  }

  saveQuestion(values:any){
    if(this.fg.valid){
      this.api.addQuestion(values).subscribe(resp=>{
        this.router.navigate(['questions']);
      })
    }else{
      alert("Please fill all required fields")
    }
  }
}
