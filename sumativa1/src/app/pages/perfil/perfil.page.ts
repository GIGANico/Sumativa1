import { AlertController } from '@ionic/angular';
import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { OnInit, QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  nombre: string="";
  apellido: string="";
  token: any = "";

  constructor(private alertController: AlertController, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  guardar(){
    this.presentAlert(this.nombre +' '+ this.apellido)
  }


  ngAfterViewInit() {
    if (this.card) {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');
    }
  }

  play() {
    if (this.animation) {
      this.animation.play();
    }
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
