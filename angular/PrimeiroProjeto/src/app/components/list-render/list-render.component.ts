import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Turca", Type: "Dog"},
    {name: "Tom", Type: "Cat"},
    {name: "Frida", Type: "Dog"},
    {name: "Bob", Type: "Horse"}
  ];
  

}
