import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCoordonneesPage } from '../modal-coordonnees/modal-coordonnees.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  public showCoordonnees() {
      this.modalCoordonnees();
  }

  async modalCoordonnees() {
    const modal = await this.modalController.create({
      component: ModalCoordonneesPage
    });

    return await modal.present();
  }
}
