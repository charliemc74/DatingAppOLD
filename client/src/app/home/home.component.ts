import { Login } from './../model/login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() registerCompletePassUp = new EventEmitter<Login>();
  registerMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

  registerComplete(event: Login)
  {
    console.log('Registration Complete: ' + event.username);
    this.registerCompletePassUp.emit(event);
  }

}
