import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test2Page } from '../test2/test2.page';

@Component({
    selector: 'app-test1',
    templateUrl: './test1.page.html',
    styleUrls: ['./test1.page.scss'],
})
export class Test1Page implements OnInit {

    constructor(
        private modalCtlr: ModalController
    ) {}

    async presentModal() {
        let modal = await this.modalCtlr.create({
            component: Test2Page
        });
        return await modal.present();
    }

    ngOnInit() {}

}