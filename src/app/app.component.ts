import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-demo';

  pi = 3.13;

  GetTitle(){
    this.title = "Angular real demo"
    return  "Hello world";
  }
}
