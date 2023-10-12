import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _auth:AuthServiceService,
     private _router:Router) { }

  ngOnInit(): void {
  }
  
 
  logOut(){
    this._auth.logOut()
   this._router.navigate(['/'])
  }

}
