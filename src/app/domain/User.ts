

export class User{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.age = age;
        this.name = name;
    }

    GetUser(){
        return `Name: ${this.name} and Age: ${this.age} years old.`;        
    }
}