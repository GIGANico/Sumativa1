import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarjuegoPage } from './modificarjuego.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarjuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarjuegoPageRoutingModule {}
