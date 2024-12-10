import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  list!:any[]

  constructor(private api:ApiService){
    this.api.allQuestions().subscribe(resp=>{
      this.list = resp;
    })
  }

  deleteQuestion(id:number){
    this.api.deleteQuestion(id).subscribe(resp=>{
      alert('Deleted')
      this.api.allQuestions().subscribe(resp=>{
        this.list = resp;
      })
    })
  }
}
