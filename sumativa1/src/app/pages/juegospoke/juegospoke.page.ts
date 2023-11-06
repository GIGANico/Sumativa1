import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegospoke',
  templateUrl: './juegospoke.page.html',
  styleUrls: ['./juegospoke.page.scss'],
})
export class JuegospokePage implements OnInit {
  listaJuegos = [
    {
      nombre: 'Pokémon Rojo',
      lanzamiento: '1996',
      plataforma: 'Game Boy',
      descripcion: 'El primer juego de Pokémon.',
      imagen: "https://consolaytablero.com/wp-content/uploads/2014/07/pokemon-rojo.jpg"
    },
    {
      nombre: 'Pokémon Oro',
      lanzamiento: '1999',
      plataforma: 'Game Boy Color',
      descripcion: 'Introdujo 100 nuevos Pokémon.',
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGMz4YOCsgRbhcCVI6ORO8N0OJ84lPvSvyA&usqp=CAU"
    },
    {
      nombre: 'Pokémon Ruby',
      lanzamiento: '2002',
      plataforma: 'Game Boy Advance',
      descripcion: 'Incluyó la región de Hoenn.',
      imagen: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-13109-13.jpg"
    }
    // voy a agregar mas proximamente
  ];

  constructor() { }

  ngOnInit() {
  }

}
