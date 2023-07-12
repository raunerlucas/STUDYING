import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  paragraph = 'Tratase de um projeto de Hello World; Do qual onde aprendo a desensolver com Angular!';
  userName = "john";
  userData = {
    email: 'john@example.com',
    fone: '+556295952603',
    role: 'admin'
    };
}
