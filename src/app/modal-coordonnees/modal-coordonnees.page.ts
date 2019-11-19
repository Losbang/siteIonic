import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-coordonnees',
  templateUrl: './modal-coordonnees.page.html',
  styleUrls: ['./modal-coordonnees.page.scss'],
})
export class ModalCoordonneesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
      await this.modalController.dismiss();
  }
}
