import { Injectable } from '@angular/core';
import { Iuser } from '../model/model';
import { Router } from '@angular/router';

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


  constructor(private _router :Router) { }

  getAllUsers() {
    return this.usersArray
  }

  getSingleUser(id:string){
    return this.usersArray.find(user =>{
      return user.uid === id
    })
  }

  getUpdateUser(userObj:Iuser){
      return this.usersArray.forEach(ele =>{
             if(ele.uid ===userObj.uid) {
              ele.fname = userObj.fname  ;
              this._router.navigate(['/users'])
             }

      })
  }
}
