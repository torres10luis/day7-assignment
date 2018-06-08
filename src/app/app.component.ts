import { Component, OnInit } from '@angular/core';


interface Fighter {
  name: string;
  points: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  fighter1 = this.fighter1 = new Fighter();

  ngOnInit() {
  }
}
