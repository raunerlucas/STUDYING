import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: String = "";
  private pokeData: Pokemon | any

  constructor( private http: HttpClient) {

    this.baseUrl =  environment.pokeApi;
  }

  getPokemon(pokemon: String | number): Observable<Pokemon> {
    this.pokeData = this.http.get<Pokemon>
    (`${this.baseUrl}${pokemon}`)
    return this.pokeData
  }

}
