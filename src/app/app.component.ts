import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childComponent';
  fname = 'Shweta Upadhye'
  add = 'Sangli'
  name = 'John';
  email = 'john@gmail.com';
  contact = '1234567890'
  public a = 30;
  public b = 20;
  public c = 50;

  objValues = {
    key1: 'shweta',
    key2: 'shwetaupadhye777@gmail.com',
    key3: '7756903852'
  }
  // values = {
  //   fname: 'John',
  //   email: 'john@gmail.com',
  //   contact: '1234567890',
  //   a: 30,
  //   b: 20,
  //   c: 50,
  // }


}
