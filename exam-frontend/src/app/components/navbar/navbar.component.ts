import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, HeaderComponent, RouterLinkActive],
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
