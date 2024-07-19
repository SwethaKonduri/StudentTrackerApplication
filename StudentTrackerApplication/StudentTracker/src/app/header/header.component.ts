import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public userService: UserService, private router: Router) { }

  logout(){
    sessionStorage.setItem("token","");
    alert("Successfully Logged Out");
    this.router.navigate(['/login']);
  }



}
