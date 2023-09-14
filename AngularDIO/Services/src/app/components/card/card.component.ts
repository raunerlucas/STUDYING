import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: Pokemon = {
    id:0,
    name: "Sem nome",
    sprites: {front_default: ""},
    types: []
  }
  attributsTypes: String[] = ['' || 'NDA'];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon("1")
  }

  getPokemon(searchPokemon: string){
    this.service.getPokemon(searchPokemon).subscribe({
      next: (res) => {
        this.pokemon ={
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      }});
  }
}
