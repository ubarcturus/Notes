import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    public selectedItem: any;

    public listItems: Array < {
        title: string;
        dateTime: any;
        content: string
    } > = [];

    constructor(
        public storage: Storage
    ) {

        for (let i = 1; i < 11; i++) {
            this.listItems.push({
                title: 'Überschrift ' + i,
                dateTime: Math.floor((Math.random() * 100) + 1),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptatem, dolores explicabo aperiam facilis praesentium, deserunt, sit sed aut quod cupiditate. Porro recusandae ipsa dicta nihil voluptas neque, distinctio, iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum delectus, eius perferendis quam sed iure laudantium officiis. Tempore dolorum, debitis dolor itaque quis vero facilis facere quos sunt, officiis pariatur.",
            });
        }

        /*this.storage.get("allNotes").then((res) => {
            if (res. noch keine Einträge) {
             "Du hast noch keine Notizen"   
            }
        })*/

        this.listItems.sort((a, b) => a.dateTime - b.dateTime);
    }

    ngOnInit() {}

    // add back when alpha .4 is out
    /*navigate(item) {
        this.router.navigate(['/list', JSON.stringify(item)]);
    }*/
}