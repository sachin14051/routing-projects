import { Injectable } from '@angular/core';
import { Iuser } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray: Array<Iuser> = [
    {
      fname: "jhon",
      uid: "bebbde"
    },
    {
      fname: "dow",
      uid: "bebbdjyje"
    },
    {
      fname: "may",
      uid: "gtgtgt"
    },
    {
      fname: "donald",
      uid: "bebferewrbde"
    }
  ];


  constructor() { }

  getAllUsers() {
    return this.usersArray
  }
}
