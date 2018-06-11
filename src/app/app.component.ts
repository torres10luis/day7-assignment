import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I am superman';
 

  users = [{
    name: 'test user',
    age: 30
   }, {
    name: ' test user 2',
    age: 2
  }];



  displayParagraph = true;
  // displayParagraph = false; here is the other one that i use to make sure this work.
}
