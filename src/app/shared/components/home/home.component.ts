import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginStatus: boolean = false
  loginFormStatus : boolean = true
  constructor(private _auth:AuthServiceService) { }

  ngOnInit(): void {
  }

  onsubmit(email:string,password:string){
    this._auth.logIn(email,password)
  }
}
