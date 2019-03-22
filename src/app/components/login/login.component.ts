import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:string;
  password:string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Login clicked')
    console.log(this.login);
    if (this.login == "admin" && this.password == "admin") {
      this.router.navigate(['/transfer']);
    } else {
      
    }
  }

}
