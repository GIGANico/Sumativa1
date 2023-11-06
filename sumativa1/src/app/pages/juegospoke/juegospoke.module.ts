import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegospokePageRoutingModule } from './juegospoke-routing.module';

import { JuegospokePage } from './juegospoke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegospokePageRoutingModule
  ],
  declarations: [JuegospokePage]
})
export class JuegospokePageModule {}
