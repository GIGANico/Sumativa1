import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

@Component({
  selector: 'app-agregarjuego',
  templateUrl: './agregarjuego.page.html',
  styleUrls: ['./agregarjuego.page.scss'],
})
export class AgregarjuegoPage implements OnInit {

  nombre: string = "";
  imagen: string = "";
  anno: number = 0;
  plataforma: string = "";
  descripcion: string = "";

  constructor(private db: ServicioDBService,private toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }


  enviarDatos(){
    this.db.insertaJuegos(this.nombre,this.imagen,this.anno,this.plataforma,this.descripcion)
    this.db.presentToast("Juego Agregado");
    this.router.navigate(['/juegospoke']);
  }

  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
