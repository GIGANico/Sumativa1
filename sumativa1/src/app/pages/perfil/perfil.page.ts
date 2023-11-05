import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  ingresar(){
    //this.presentAlert(this.user.usuario)
  }


  //[routerLink]="['/home']   para pasar entre paginas sin enviar datos

  async presentAlert(mensaje:string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['Confirmar'],
    });

    await alert.present();
  }

}
