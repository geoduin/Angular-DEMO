import { Injectable } from "@angular/core";
import { User } from "../domain/User";

@Injectable({providedIn: 'root'})
export class UserCacheDB{
    UserList:User[] = [];

    constructor(){
        console.log('New card created');
        console.log(this.UserList);
    }

    AddUser(name:string, age:number){
        this.UserList.push(new User(name, age));
        console.log(this.UserList);
    }

    GetUsers(){
        return this.UserList;
    }

    ClearList(){
        this.UserList = [];
    }

}