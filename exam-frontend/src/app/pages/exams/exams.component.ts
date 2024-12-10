import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {
  cats!:any[]
  list!:any[]
  exams!:any[]
  fg!:FormGroup

  constructor(private api:ApiService,private fb:FormBuilder){
    this.loadData()
    this.createForm()
  }

  createForm(){
    this.fg = this.fb.group({
      'catid':['',Validators.required],
      'userid':['',Validators.required],
      'createdby':[localStorage.getItem('userid')],
    })
  }

  saveExam(values:any){
    this.fg.patchValue({'createdby':localStorage.getItem('userid')})
    console.log(values, this.fg.valid)
    if(this.fg.valid){
      this.api.saveExams(values).subscribe(resp=>{
        alert('Saved')
        this.fg.reset()
        this.loadData()
      },
    error=>{
      console.log(error.error)
      alert(error.error)
    })
    }
    else{
      alert('Please select all fields')
    }
  }

  loadData(){
      this.api.allusers().subscribe(resp => {
        this.list = resp.filter(x => x.role ==='Student')
      })

      this.api.listallcategories().subscribe(resp => {
        this.cats = resp;
      })

      this.api.listExams(localStorage.getItem('userid')!).subscribe(resp =>{
        this.exams = resp;
      })
  }
}
