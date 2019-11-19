import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCoordonneesPage } from './modal-coordonnees.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCoordonneesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCoordonneesPageRoutingModule {}
