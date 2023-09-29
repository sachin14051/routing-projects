import { Component, OnInit } from '@angular/core';
import { Iuser, UserRoleStatus } from '../../model/model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { IdService } from '../../service/id.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userrole:boolean =false
  userId !: string;
  userObj !: Iuser;
  constructor(private _route : ActivatedRoute,
               private _userService: UsersService,
               private _getId : IdService) { }

  ngOnInit(): void {
     this.userId = this._route.snapshot.params['userdId'];
     this.userObj = this._userService.getSingleUser(this.userId)!
     //console.log(this.userId)
     //console.log(this.userObj)
     console.log(this._route.snapshot.queryParams['canEditUser'])
     if(this._route.snapshot.queryParams['canEditUser']==='admin'){
       this.userrole = true
     }
  }

  onUpdateUser(fname:HTMLInputElement,){
    let obj:Iuser = {
      fname :fname.value,
      uid : this.userId,
      userRole:this.userObj.userRole

    }
    this._userService.getUpdateUser(obj)
  }

  onaddUser(fname:string){
      let obj :Iuser ={
        fname: fname,
        uid: this._getId.getId(),
        userRole:"admin"
      }
      console.log(obj)
      this._userService.getAdduser(obj)
  }  

}
