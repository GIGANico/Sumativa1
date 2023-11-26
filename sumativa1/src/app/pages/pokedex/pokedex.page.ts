import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  offset = 0;
  pokemon: any[] = [];
  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;
  /*
    pokemonList = [
      {
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        type: 'Grass/Poison',
        height: '0.7 m',
        weight: '6.9 kg',
      },
      {
        name: 'Charmander',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        type: 'Fire',
        height: '0.6 m',
        weight: '8.5 kg',
      },
      {
        name: 'Squirtle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        type: 'Water',
        height: '0.5 m',
        weight: '9.0 kg',
      },
    ];
  
  */
  constructor(private pokeapi: PokeapiService) { }

  ngOnInit() {
    this.loadPokemon();
  }


  loadPokemon(loadMore = false, event?: any) {
    if(loadMore) {
      this.offset +=25 ;
    }

    this.pokeapi.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];

      if(event) {
        event.target.complete();
      }

      if(this.offset == 125 ) {
        this.infinite.disabled = true;
      }
    })

  }


  onSearchChange(e: any) {
    let value = e.detail.value;

    if(value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }

    this.pokeapi.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }

}
