import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCoordonneesPageRoutingModule } from './modal-coordonnees-routing.module';

import { ModalCoordonneesPage } from './modal-coordonnees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCoordonneesPageRoutingModule
  ],
  declarations: [ModalCoordonneesPage]
})
export class ModalCoordonneesPageModule {}
