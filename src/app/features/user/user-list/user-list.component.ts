import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/domain/User';
import {UserCacheDB } from '../../../services/UserService.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  Users: User[] = this.userDB.GetUsers();
  
  constructor(private userDB: UserCacheDB) {
    console.log('Component is constructued');
    
  }

  ngOnInit(): void {
    console.log(this.Users);
    console.log('UserService is loaded');
  }

  ngOnDestroy(): void {
      console.log("Feyenoord nummer 1");
  }
}
