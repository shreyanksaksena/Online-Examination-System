import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myreport',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './myreport.component.html',
  styleUrl: './myreport.component.css'
})
export class MyreportComponent {
  examid:any
  data:any
  constructor(private api:ApiService, private acroute:ActivatedRoute){
    this.acroute.paramMap.subscribe(resp=>
      this.examid = resp.get('examid')
    )
    this.loadDetails()
  }

  loadDetails(){
    this.api.examdetails(this.examid).subscribe(resp=>{
      this.data = resp
    })
  }
}
