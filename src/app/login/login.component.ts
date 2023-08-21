import { Component } from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService:UserService,
    private router:Router,
  ) {}

  Submit(){
    this.userService.logIn(this.loginForm.value).subscribe((res) => {
      let user = this.userService.local_users.find(el => el.username === this.loginForm.value.username)
     let local =
       {
         user : this.loginForm.value.username,
         id: user?.id,
         token : JSON.stringify(res),
         liked_items:  user?.likedItems,
       }
       localStorage.setItem("logged_user" , JSON.stringify(local));
      this.userService.subject.next('546546')
      setTimeout(()=>this.router.navigate(['']),2000);
    }, (err) => {
      alert(err.error)
    })

  }
}
