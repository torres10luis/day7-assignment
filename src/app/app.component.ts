import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  name = 'Luis';
  amount = 22;
  array = [1, 2, 3, 'ford', 'chevy'];
  car: any = 'ford'; 3;
ngOnInit() {
  console.log(this.car, this.array, this.amount, this.name);

}
}
