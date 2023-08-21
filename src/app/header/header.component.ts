import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges{

  is_logged = ''
  is_search = false;
  keyword = '';
  home: boolean | undefined;
  is_bag = false;

  constructor(private router:Router, private appComponent:AppComponent,private userService:UserService) {
    if(localStorage.getItem('logged_user')){
      this.is_logged = JSON.parse(<string>localStorage.getItem('logged_user')).user
    }
    this.home = this.appComponent.is_home;
  }

  ngOnInit() {
    this.userService.subject.subscribe(ping=>{
      this.is_logged = JSON.parse(<string>localStorage.getItem('logged_user')).user
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  navigateToShop(event: any){
    this.is_search = false;
    this.router.navigate(['/shop' + '/' + this.keyword]);
    this.keyword = ''
  }
}
