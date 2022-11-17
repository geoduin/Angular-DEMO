import { Injectable } from "@angular/core";
import { User } from "../domain/User";

@Injectable({providedIn: 'root'})
export class UserCacheDB{
    Url:string = 'mongodb+srv://Admin:Admin@demo.s3ri1o4.mongodb.net/?retryWrites=true&w=majority';

    UserList:User[] = [new User('Jacob', 19), new User('Bob', 51), new User('Jacobs', 19), new User('Boby', 51)];

    constructor(){
        console.log('New user service created');
        console.log(this.UserList);
    }

    AddUser(name:string, age:number){
        this.UserList.push(new User(name, age));
        console.log(this.UserList);
    }

    GetUsers(){
        return this.UserList;
    }
    GetUserById(filter: string): User{
        return this.UserList.filter(user => user.UserName == filter)[0];
    }
    ClearList(){
        this.UserList = [];
    }

}