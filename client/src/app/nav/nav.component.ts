import { LoginService } from './../services/login.service';
import { Login } from './../model/login';
import { Component, OnInit, Input } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  @Input() registeredUser: Login;
  loginModel = new Login('', '');
  
  constructor(public loginService: LoginService ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login()
  {
    this.loginService.loginUser(this.loginModel).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
    });
  }

  logout() {
     this.loginService.logoutUser();
  }

  getCurrentUser(){
    this.loginService.currentUser$.subscribe(user => {
      this.loginModel.username = user.userName;
    }, error => {
      console.log(error);
    });
  }

  updateUser()
  {
    this.getCurrentUser();
  }

}
