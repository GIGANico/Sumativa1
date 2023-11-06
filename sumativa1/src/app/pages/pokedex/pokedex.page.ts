import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

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


  constructor() { }

  ngOnInit() {
  }

}
