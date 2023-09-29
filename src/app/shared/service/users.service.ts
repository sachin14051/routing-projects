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
      uid: "a",
      userRole:"admin"
    },
    {
      fname: "dow",
      uid: "b",
      userRole:"user"
    },
    {
      fname: "may",
      uid: "c",
      userRole:"admin"
    },
    {
      fname: "donald",
      uid: "d",
      userRole:"user"
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

  getDeleteUser(id:string){
       let getIndex = this.usersArray.findIndex(ele =>( ele.uid===id) );

       this.usersArray.splice(getIndex,1)
       this._router.navigate(['/users'])

  }

  getAdduser(obj:Iuser){
    this.usersArray.push(obj);
    this._router.navigate(['/users'])
  }
}
