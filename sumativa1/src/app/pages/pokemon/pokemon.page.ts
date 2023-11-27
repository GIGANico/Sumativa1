import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {


  details: any;
  slideOpts = {
    autoplay: {
      delay: 1,
      disableOnInteraction: true
    }
  };

  constructor(private route: ActivatedRoute, private pokeapi: PokeapiService) { }



  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');

    this.pokeapi.getPokeDetails(index).subscribe(details => {
      console.log('Details:', details);
      this.details = details;
      this.details.images = details.images ? details.images.slice() : [];
    });
  }

}
