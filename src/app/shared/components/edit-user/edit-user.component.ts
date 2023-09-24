import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId !: string;
  userObj !: Iuser;
  constructor(private _route : ActivatedRoute,
               private _userService: UsersService) { }

  ngOnInit(): void {
     this.userId = this._route.snapshot.params['userdId'];
     this.userObj = this._userService.getSingleUser(this.userId)!
     console.log(this.userId)
     console.log(this.userObj)

  }

  onUpdateUser(fname:HTMLInputElement,){
    let obj:Iuser = {
      fname :fname.value,
      uid : this.userId
    }
    this._userService.getUpdateUser(obj)
  }

  onaddUser(){
    
  }  

}
