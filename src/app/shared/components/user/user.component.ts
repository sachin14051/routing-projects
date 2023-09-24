import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Iuser } from '../../model/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userObj !: Iuser
   userId!:string 
  constructor(private _routes:ActivatedRoute,
    private _userService : UsersService) { }

  ngOnInit(): void {
    console.log(this._routes.snapshot.params['userdId'])
    this.userId =this._routes.snapshot.params['userdId']
    this.userObj =this._userService.getSingleUser(this.userId)!

    this._routes.params.subscribe((params:Params)=>{
         this.userId = params['userdId'];
    this.userObj =this._userService.getSingleUser(this.userId)!

    })
  }


}
