import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCoordonneesPage } from '../modal-coordonnees/modal-coordonnees.page'
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        public modalController: ModalController,
        private menu: MenuController
    ) { }

    public showCoordonnees() {
        this.modalCoordonnees();
    }

    async modalCoordonnees() {
        const modal = await this.modalController.create({
            component: ModalCoordonneesPage
        });

        return await modal.present();
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    scrollToElement(element) {
        this.menu.close('menu');
        element.scrollIntoView({ behavior: "smooth" });
    }
}
