import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  list!:any[]
  fg!: FormGroup;
  constructor(private api:ApiService,private fb:FormBuilder){
    this.createForm();
    this.loadData()
  }

  createForm(){
    this.fg=this.fb.group({
      'name':['',Validators.required],
    })
  }

  saveSubject(values:any){
    if(this.fg.valid){
      this.api.addcategory(values).subscribe(resp=>{
        alert('Category saved')
        this.fg.reset()
        this.loadData()
      })
    }
  }

  deleteSubject(id:number){
    this.api.deleteCategory(id).subscribe(resp=>{
      alert('Category deleted')
      this.loadData()
    })
  }

  loadData(){
    this.api.listallcategories().subscribe(resp=>{
      this.list = resp
    })
  }
}
