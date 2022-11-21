import { Component, OnInit } from '@angular/core';
import { UserCacheDB } from 'src/app/services/UserService.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from './../../../domain/User';

import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  componentExists: boolean = false;
  //Gebruikt als ngModel voor het formulier.
  Gebruiker:User | undefined

  Users = this.UserDB.GetUsers();
  ActivatedName: string | undefined | null;

  constructor(
    private UserDB: UserCacheDB,
    private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.ActivatedName = param.get("name");
      console.log(this.ActivatedName);
      if(this.ActivatedName){
        console.log("Wijzigen");
        //Bestaande user
          this.Gebruiker = this.UserDB.GetUsers().filter(p => p.UserName == this.ActivatedName)[0];
          console.log(this.Gebruiker);
          this.componentExists = true;
      } else{
          //New object maken.
          this.componentExists = false;
          this.Gebruiker = {
            UserName: "",
            age: 0,
            Image: undefined
          }
      }
    })
    
  }
  OnSubmit2(){
    console.log(this.Gebruiker);
    if(this.componentExists){
      console.log("Gebruiker is aangepast")
      //Wijzig gebruiker
      let Gebruiker2 = this.UserDB.GetUsers().filter(p => p.UserName == this.ActivatedName)[0];
      Gebruiker2 = this.Gebruiker!;
      // this.UserDB.UpdateUser(this.Gebruiker);
    } else{
      //Creeer nieuwe gebruiker
      console.log("Gebruiker is aangemaakt")
      this.UserDB.AddUser(this.Gebruiker!.UserName!, this.Gebruiker!.age!);
      this.router.navigate([".."]);
    }
  }

  AddUser(name:string, age:number){

    this.UserDB.AddUser(name, age);
  }

}
