import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  linksList = [
    { title: 'Home', link: 'home' },
    { title: 'Login', link: 'login' },
    { title: 'Sign up', link: 'signup'}

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoRoute(page) {
    this.router.navigate([page]);
    
  }

}
