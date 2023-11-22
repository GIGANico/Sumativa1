import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

@Component({
  selector: 'app-modificarjuego',
  templateUrl: './modificarjuego.page.html',
  styleUrls: ['./modificarjuego.page.scss'],
})
export class ModificarjuegoPage implements OnInit {

  nombre: string = "";
  anno: number = 0;
  plataforma: string = "";
  descripcion: string = "";
  id: number = 0;

  constructor(private servicio: ServicioDBService,private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.anno = this.router.getCurrentNavigation()?.extras?.state?.['annoEnviado'];
        this.plataforma = this.router.getCurrentNavigation()?.extras?.state?.['plataformaEnviado'];
        this.descripcion = this.router.getCurrentNavigation()?.extras?.state?.['descripcionEnviado'];
      }
    })
  }

  ngOnInit() {
  }


  enviarDatos(){
    this.servicio.modificarJuegos(this.id,this.nombre,this.anno,this.plataforma,this.descripcion)
    this.servicio.presentToast("Juego Actualizado");
    this.router.navigate(['/juegospoke']);
  }

}
