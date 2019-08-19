import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    Notes = [];

    listItems = [];

    notesSkeleton = {
        // picture: "Bild",
        time: "Uhrzeit",
        title: "Titel",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora hic necessitatibus, aperiam eum quis nisi similique! Mollitia ut ipsa animi tempora obcaecati a similique accusamus dolorum, corrupti eligendi ea, neque."
    };

    constructor(
        public storage: Storage,
    ) {

        this.storage.get("allNotes").then((res) => {
            if ((res == null) || (res == undefined)) {
                alert("Du hast noch keine Notizen!");
                // document.body. = "Du hast noch keine Notizen!";
                console.log(res);

            } else {
                this.Notes = res;
            }
        })

        for (let i = 0; i < this.Notes.length; i++) {
            this.Notes.push();
        }

        /*for (var i = 0; i < 10; ++i) {

            this.listItems.push(this.notesSkeleton)
        }*/
    }

    ngOnInit() {};
}