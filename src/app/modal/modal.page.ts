import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { AddPage } from '../add/add.page';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    constructor(
        private modalCtlr: ModalController,
        private NavParams: NavParams,
        private storage: Storage,
    ) {
        let input = NavParams.get("input")

        /*this.storage.get("allNotes").then((res) => {
        	res.indexOf(id), 1;
            console.log(this.sortedNotes);
        });*/
    }

    dismiss() { this.modalCtlr.dismiss() }

    ngOnInit() {}

}