

export class User{
    UserName:string| undefined;
    age:number | undefined;
    Image: FormData | undefined;

    constructor(name:string, age:number){
        this.age = age;
        this.UserName = name;
        this.Image = undefined;
    }
}