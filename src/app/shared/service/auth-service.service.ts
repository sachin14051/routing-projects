import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loginStatus : boolean = false

  constructor(private _route : Router) { }
   
  authrization():Promise<boolean>{
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
     if(localStorage.getItem("token")){
      this.loginStatus = true
     }else{
      this.loginStatus =false
     };
       return resolve(this.loginStatus)
     }, 100);
    })
  }

  logIn(email:string, password:string){
    if(email === "admin@gmail.com" && password === "123456"){
      this.loginStatus = true;
      localStorage.setItem("token", "JWT");
      localStorage.setItem("userRole", "admin")
      this._route.navigate(['/admin'])
      this.loginStatus = true
    }else if(email === "superadmin@gmail.com" && password === "123456"){
      this.loginStatus = true;
      localStorage.setItem("token", "JWT");
      localStorage.setItem("userRole", "superAdmin")
      this._route.navigate(['/superAdmin'])
      this.loginStatus = true

    }
    else{
      alert (`plz enter valid email and password`)
      this.loginStatus = false
    }
    
  }
  logOut(){
    localStorage.removeItem("token")
      this.loginStatus = false;
   }

}
