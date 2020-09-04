 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { FormBuilder, Validators } from '@angular/forms';
 import { HttpClient } from '@angular/common/http';


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

   public uiInvalidCredential = false;

   public fbFormGroup = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required],
   });
 
   constructor(
     private fb: FormBuilder,
     private router: Router,
     private http: HttpClient
   ) {}
 
   ngOnInit(): void {}
 
   async loginProcessHere() {
     const data = this.fbFormGroup.value;
 
     // ajax call
     const url = 'http://localhost:3000/auth-user';
     const result: any = await this.http.post(url, data).toPromise();
     if (result.opr) {
       sessionStorage.setItem('sid', 'true');
       this.router.navigate(['home']);
     } else {
       this.uiInvalidCredential = true;
     }
   }
 }


