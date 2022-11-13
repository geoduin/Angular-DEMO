import { Component, OnInit } from '@angular/core';
import { UserCacheDB } from 'src/app/services/UserService.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  Users = this.UserDB.GetUsers();
  ActivatedName = '';
  constructor(private UserDB: UserCacheDB,private formBuilder: FormBuilder,private route: ActivatedRoute) { 
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    age: ''
  });

  ngOnInit(): void {
    console.log(this.UserDB.GetUsers());
    
    this.route.queryParams.subscribe(param => {
      this.ActivatedName = param['name'];
    })
    let user = this.UserDB.GetUsers().filter(p => p.name == this.ActivatedName)[0];
    
  }

  OnSumbit(){
    console.log(this.checkoutForm.value);
    let data = this.checkoutForm.value;
    let Age = Number.parseInt(data.age!);
    this.AddUser(data.name!, Age);
  }

  AddUser(name:string, age:number){

    this.UserDB.AddUser(name, age);
  }

}
