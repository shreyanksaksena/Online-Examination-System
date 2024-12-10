import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  uinfo!:any

  constructor(private api:ApiService){
    this.api.profile(localStorage.getItem('userid')!.toString()).subscribe(resp=>{
      this.uinfo = resp
    })
  }
}
