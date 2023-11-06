import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string="";
  apellido: string="";
  

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  guardar(){
    this.presentAlert(this.nombre +' '+ this.apellido)
  }


 

  async presentAlert(mensaje:string) {
    const alert = await this.alertController.create({
      header: 'Hola Entrenador',
      message: mensaje,
      buttons: ['Confirmar'],
    });

    await alert.present();
  }

}
