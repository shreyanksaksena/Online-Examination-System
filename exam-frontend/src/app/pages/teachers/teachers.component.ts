import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  list!:any[]
  constructor(private api:ApiService){
    this.loadData();
  }

  loadData(){
    this.api.allusers().subscribe(resp=>{
      this.list = resp.filter(x=>x.role==='Teacher')
    })
  }
}
