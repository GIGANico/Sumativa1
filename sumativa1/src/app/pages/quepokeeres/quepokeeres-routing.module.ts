import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuepokeeresPage } from './quepokeeres.page';

const routes: Routes = [
  {
    path: '',
    component: QuepokeeresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuepokeeresPageRoutingModule {}
