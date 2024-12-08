import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  role=localStorage.getItem("role")
  constructor(private _router:Router){}

  logout(){
    localStorage.clear();
    this._router.navigate(['/'])
  }
}
