import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h1{
    color: red;
    margin: auto;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
