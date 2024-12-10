import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  list!:any[]
  constructor(private api:ApiService){
    this.loadData();
  }

  loadData(){
    this.api.allusers().subscribe(resp=>{
      this.list = resp.filter(x=>x.role==='Student')
    })
  }
}
