import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/domain/User';
import { UserCacheDB } from 'src/app/services/UserService.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  UserInQuestion:User| undefined;

  constructor(private userService : UserCacheDB, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var name = param.get("name");
      console.log(name);
      if(name){
        this.UserInQuestion = this.userService.GetUserById(name);
        console.log(this.UserInQuestion);
      } else{
        console.log("Gebruiker bestaat niet");
      }
    })
  }

}
