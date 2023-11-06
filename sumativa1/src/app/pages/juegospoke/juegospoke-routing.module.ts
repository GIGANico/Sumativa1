import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegospokePage } from './juegospoke.page';

const routes: Routes = [
  {
    path: '',
    component: JuegospokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegospokePageRoutingModule {}
