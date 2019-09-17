import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-test2',
    templateUrl: './test2.page.html',
    styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {

    constructor(
        private modalCtlr: ModalController,
        private NavParams: NavParams,
    ) {
        let input = NavParams.get("input")
    }

    dismiss() { this.modalCtlr.dismiss() }
    ngOnInit() {}

}