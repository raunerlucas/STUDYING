import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  animals: Animal[] = [];
  
  animalDetails = ''

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  constructor(private listService: ListService){
    this.getAnimals()
  }

  getAnimals(){
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => a.name !== animal.name)
    this.listService.remove(animal.id).subscribe();
  }
}
