import { Component, OnInit } from '@angular/core';


class CarBrand {
  constructor(protected make: string ) {

  }
}
class Car extends CarBrand {
  // private;
  // model: string;
  // year: number;

  constructor(public make: string, public model: string, public year: number) {
    super(make);
  }

  getDetails() {
    // tslint:disable-next-line:no-unused-expression
    return (this.make, this.model, this.year);
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ford: CarBrand = new CarBrand('Ford');
  honda: Car = new Car ('Honda', 'accord', 2018);

  ngOnInit() {
    console.log(this.ford);
    console.log(this.honda);
  }
}
