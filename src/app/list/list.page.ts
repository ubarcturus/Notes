import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
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
    ) {
        this.storage.get("allNotes").then((res) => {
            if ((res == null) || (res == undefined) || (res.length == 0)) {
                alert("Du hast noch keine Notizen!");
                document.getElementsByTagName("Du hast noch keine Notizen!");

            } else {
                res.sort(function(a, b) { return a.dateTime - b.dateTime });
                this.sortedNotes = res;
                console.log(this.sortedNotes);
            }
        })

        for (let i = 0; i < this.sortedNotes.length; i++) {
            this.sortedNotes.push();
        }
    };

    delNote(id) {
        this.storage.get("allNotes").then((res) => {
            res.splice(res.indexOf(id), 1);
            this.storage.set("allNotes", res);
        })

        console.log(id);
    }

    editNote(id) {
        this.storage.get("allNotes").then((res) => {
            res.splice(res.indexOf(id), 1);
            this.storage.set("allNotes", res);
        })
    }

    ngOnInit() {}

    // add back when alpha .4 is out
    /*navigate(item) {
        this.router.navigate(['/list', JSON.stringify(item)]);
    }*/
}