import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

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
            if ((res == null) || (res == undefined)) {
                alert("Du hast noch keine Notizen!");
                // document.body. = "Du hast noch keine Notizen!";
                console.log(res);

            } else {
                res.sort(function(a, b){return a.dateTime - b.dateTime});
                this.sortedNotes = res;
            }
        })

        for (let i = 0; i < this.sortedNotes.length; i++) {
            this.sortedNotes.push();
        }
    };

    delNote() {
        var timeStamp = this.sortedNotes.
    }

    ngOnInit() {}

    // add back when alpha .4 is out
    /*navigate(item) {
        this.router.navigate(['/list', JSON.stringify(item)]);
    }*/
}