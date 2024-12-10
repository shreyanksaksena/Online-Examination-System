import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  exams!:any[]
  constructor(private api:ApiService){
    this.api.listExams(localStorage.getItem('userid')!).subscribe(resp =>{
      this.exams = resp;
    })
  }
  
}
