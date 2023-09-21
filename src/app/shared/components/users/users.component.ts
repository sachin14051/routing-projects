import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Iuser } from '../../model/model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  usersArray : Array<Iuser> =[]
  constructor(private _usersservice:UsersService) { }

  ngOnInit(): void {
   this.usersArray = this._usersservice.getAllUsers()
  }

}
