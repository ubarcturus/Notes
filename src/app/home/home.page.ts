import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    listItems = new Array();
    notesSkeleton = {
        picture: "Bild",
        title: "Titel",
        time: "Uhrzeit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora hic necessitatibus, aperiam eum quis nisi similique! Mollitia ut ipsa animi tempora obcaecati a similique accusamus dolorum, corrupti eligendi ea, neque."
    };
    constructor() { this.listItems.push(this.notesSkeleton) };
}