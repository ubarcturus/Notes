import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    listItems = [];

    notesSkeleton = {
        // picture: "Bild",
        title: "Titel",
        time: "Uhrzeit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora hic necessitatibus, aperiam eum quis nisi similique! Mollitia ut ipsa animi tempora obcaecati a similique accusamus dolorum, corrupti eligendi ea, neque."
    };

    constructor() {
        for (var i = 0; i < 10; ++i) {

            this.listItems.push(this.notesSkeleton)
        }
    }
}