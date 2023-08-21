import {Component, OnInit} from '@angular/core';

import {ProductsService} from "../services/products.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array: any;
  logged_userId: any;
  user_likedItems: number[] = []
  item: number = 0;
  slider = this.productsService.slider;
  items: any[] =[] ;

  constructor(
    private productsService: ProductsService,
    private userService:UserService,
  ) {}

  ngOnInit() {
    for(let i = 0; i < 6; i++){
      this.items.push(this.productsService.products[i])
    }
    if (localStorage.getItem('logged_user')) {
      this.logged_userId = JSON.parse(<string>localStorage.getItem('logged_user')).id
      this.user_likedItems = JSON.parse(<string>localStorage.getItem('logged_user')).liked_items
      console.log(this.user_likedItems)
    }

      // for(let i = 0; i < this.user_likedItems.length; i++){
      //   this.items.find((el) => {
      //     if(el.id === this.user_likedItems[i]){
      //       this.items[this.items.indexOf(el)].liked = !this.items[this.items.indexOf(el)].liked
      //     }
      //   })
      // }

  }

  isliked(id: number){
    return this.user_likedItems.some(x=> x === id)
  }

  ToLike(prod: any) {
    if(this.items) {
      this.items[this.items.indexOf(prod)].liked = !this.items[this.items.indexOf(prod)].liked
      if (this.user_likedItems) {
        let item_is_liked: number | undefined = this.user_likedItems.find(el => el === prod.id);
        this.items[this.items.indexOf(prod)].liked && !item_is_liked ? this.user_likedItems.push(prod.id) :
          !this.items[this.items.indexOf(prod)].liked && item_is_liked ? this.user_likedItems.splice(this.user_likedItems.indexOf(prod.id), 1) : null
        console.log(prod.id)
        console.log(this.user_likedItems)
      }
    }
  }

}
