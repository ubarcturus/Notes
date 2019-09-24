import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

    public selectedItem: any;

    public sortedNotes = [];

    constructor(
        public storage: Storage,
        private modalCtlr: ModalController,
    ) {
        this.storage.get('allNotes').then((res) => {
            if ((res === null) || (res === undefined) || (res.length === 0)) {
                alert('Du hast keine Notizen!');
                document.getElementsByTagName('Du hast keine Notizen!');

            } else {
                res.sort(function(a, b) { return parseInt(a.dateTime, 10) - parseInt(b.dateTime, 10) });
                this.sortedNotes = res;
                console.log(this.sortedNotes);
            }
        });

        for (let i = 0; i < this.sortedNotes.length; i++) {
            this.sortedNotes.push();
        };
    };

    delNote(id) {
        this.storage.get('allNotes').then((res) => {
            res.splice(res.indexOf(id), 1);
            this.storage.set('allNotes', res);
        })

        console.log(id);

        location.reload();
    };

    async presentModal() {
        let modal = await this.modalCtlr.create({
            component: ModalPage
        });
        return await modal.present();
    };

    ngOnInit() {}

    // add back when alpha .4 is out
    /*navigate(item) {
        this.router.navigate(['/list', JSON.stringify(item)]);
    }*/
}