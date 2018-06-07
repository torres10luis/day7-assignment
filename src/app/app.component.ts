import { Component } from '@angular/core';


class CarBrand {
  constructor(protected make: string ) {

  }

class Car extends CarBrand {

}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
