import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarjuegoPageRoutingModule } from './modificarjuego-routing.module';

import { ModificarjuegoPage } from './modificarjuego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarjuegoPageRoutingModule
  ],
  declarations: [ModificarjuegoPage]
})
export class ModificarjuegoPageModule {}
