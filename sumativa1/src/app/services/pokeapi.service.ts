import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface Sprite {
  front_default?: string;
}


interface Pokemon {
  id: number;
  imagen?: string;
  pokeIndex?: number;
  sprites?: Sprite;
  images?: any[];
}


interface PokemonResponse {
  results: any[]; 
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) { 

  }

  getPokemon( offset = 0): Observable<any[]> {
    return this.http.get<PokemonResponse>(`${this.baseUrl}/pokemon?offset=${offset}&limit=26`).pipe(
      map(result => {
        return result.results;
      }),
      map(pokemons => {
        return pokemons.map((poke, index) =>{
          poke.image = this.getPokeImagen(index + offset + 1);
          poke.pokeIndex = offset + index + 1;
          return poke as Pokemon;
        });
      })
    );
  }


  getPokeImagen(index: number) {
    return `${this.imageUrl}${index}.png`;
  }



  findPokemon(search: any): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${search}`).pipe(
      map(pokemon => {
        pokemon['imagen'] = this.getPokeImagen(pokemon['id']);
        pokemon['pokeIndex'] = pokemon['id'];
        return pokemon;
      })
    )

  }

  getPokeDetails(index: any) {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${index}`).pipe(
      map(poke => {
        let sprites = poke.sprites ? Object.keys(poke.sprites): [];
        poke.images = sprites
          .map(spriteKey => poke.sprites ? poke.sprites[spriteKey as keyof Sprite] : '')
          .filter(img => img);
        return poke;
      })
    );
  }

}



