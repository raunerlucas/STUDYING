import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 3},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Frida", type: "Dog",age: 10},
    {name: "Bob", type: "Horse", age: 34},
  ];
  
  animalDetails = ''

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  constructor(private listService: ListService){
  
  }

  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }
}
