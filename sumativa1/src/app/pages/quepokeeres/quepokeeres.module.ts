import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuepokeeresPageRoutingModule } from './quepokeeres-routing.module';

import { QuepokeeresPage } from './quepokeeres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuepokeeresPageRoutingModule
  ],
  declarations: [QuepokeeresPage]
})
export class QuepokeeresPageModule {}
