import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-myexams',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './myexams.component.html',
  styleUrl: './myexams.component.css'
})
export class MyexamsComponent {
  exams!:any[]
  constructor(private api:ApiService){
    this.api.listExams(localStorage.getItem('userid')!).subscribe(resp =>{
      this.exams = resp;
    })
  }
}
