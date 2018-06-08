import { Component, OnInit } from '@angular/core';

module Vehicle {

 export class Sedan {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;

    }
  }
  export const honda = new Sedan('jeep', 'wrangler', 2018);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  ford = new Vehicle.Sedan('toyota', 'tacoma', 2018);
  honda = {make: 'toyota', model: 'tacoma', year: 2012};

  ngOnInit() {
    console.log(this.ford);
}
}
