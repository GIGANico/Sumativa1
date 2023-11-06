import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quepokeeres',
  templateUrl: './quepokeeres.page.html',
  styleUrls: ['./quepokeeres.page.scss'],
})
export class QuepokeeresPage implements OnInit {

  pokemon = [
    { nombre: 'Pikachu', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png' },
    { nombre: 'Bulbasaur', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
    { nombre: 'Charmander', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
    //Mas proximamente
  ];

  randomPokemon: { nombre: string; imagen: string } = {nombre: '', imagen: ''};

  constructor() { 
    this.randomPokemon = {
      nombre: 'ERES UN.........',
      imagen: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pokemon-icon.png',
    };
  }

  ngOnInit() {
  }

  getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * this.pokemon.length);
    this.randomPokemon = this.pokemon[randomIndex];
  }


}
