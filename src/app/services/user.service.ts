import {Injectable, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {
   subject = new BehaviorSubject('')
  users: any[] = [];
  local_users = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      likedItems: [5, 6, 9, 10, 3, 2, 23, 7],
      bagItems: [3, 10, 6, 8],
      orders: [2,5],
      billingAddress: {},
      shippingAddress: {},

    },
    {
      id: 2,
      firstname: 'davis',
      lastname: 'morison',
      email: 'morrison@gmail.co',
      username: 'mor_2314',
      password: '83r5^_',
      likedItems: [15, 6, 9, 1, 3],
      bagItems: [1,6,8,20],
      orders: [7],
      billingAddress: {},
      shippingAddress: {},
    },
    {
      id: 3,
      firstname: 'kevin',
      lastname: 'ryan',
      email: 'kevin@gmail.com',
      username: 'kevinryan',
      password: 'kev02937@',
      likedItems: [7, 3],
      bagItems: [3,9],
      orders: [],
      billingAddress: {},
      shippingAddress: {},
    }
  ]
  address = "https://fakestoreapi.com/";
  constructor(private httpClient:HttpClient) {
  }

  logIn(body: object) {
    return this.httpClient.post(this.address + 'auth/login', body)
  }
  getUsers() {
    this.httpClient.get(this.address + 'users').subscribe((res: any) => {
      this.users = res
    })
  }
}
