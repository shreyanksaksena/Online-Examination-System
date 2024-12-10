import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-startexam',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './startexam.component.html',
  styleUrl: './startexam.component.css'
})
export class StartexamComponent {

  items!:any[]
  examid:any
  fg!:FormGroup
  qg!:FormGroup
  constructor(private api:ApiService,private router:Router,private acrouter:ActivatedRoute,private fb:FormBuilder){
    this.acrouter.paramMap.subscribe(p=>{
      this.examid = p.get('examid')
      this.loadQuestions(this.examid)
      this.qg = new FormGroup({})
    })
  }

  createForm(){
    this.fg = this.fb.group({
      'examid':[this.examid],
      'answers':FormGroup
    })
  }

  questionsGroup(questions:any[]){
   
    for(let ctrl of questions){
      this.qg.addControl(ctrl.id,new FormControl(ctrl.id))
    }
    this.fg.patchValue({'answers':this.qg});
  }

  submitExam(values:any){
    console.log(values)
    const data = {
      'examid':this.examid, 
      answers:values
    }
    this.api.submitExam(data).subscribe(resp=>{
      alert('Exam Submitted')
      this.router.navigate(['myexams'])
    })
  }

  loadQuestions(id:number){
    this.api.examQuestions(id).subscribe(resp=>{
      this.items = resp;
      this.questionsGroup(resp)
    })
  }

}
