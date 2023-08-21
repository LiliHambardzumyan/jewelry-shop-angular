import {Component, OnInit} from '@angular/core';


import {UserService} from "../services/user.service";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    id: new FormControl(''),
  })
  constructor(private userService:UserService) {
  }
  ngOnInit() {
    this.userService.getUsers();
  }
  Register() {
    let last_user = this.userService.users[this.userService.users.length-1];
    let new_user_id = last_user['id'] + 1;
    this.registerForm.controls.id.setValue(new_user_id + '')
    this.userService.users.push(this.registerForm.value)
    console.log(this.userService.users)
    }
}
