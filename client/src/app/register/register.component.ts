import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter<boolean>();
  @Output() registerComplete = new EventEmitter<Login>();
  loginModel = new Login('', '');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  register() {
    this.loginService.registerUser(this.loginModel).subscribe(response => {
      console.log(response);
      this.registerSuccess(this.loginModel);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  registerSuccess(user: Login) {
    this.registerComplete.emit(user);
  }

}
