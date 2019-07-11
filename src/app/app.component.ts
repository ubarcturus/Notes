import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public appPages = [{
            title: 'Home',
            url: '/home',
            icon: 'home',
        },
        {
            title: 'Liste',
            url: '/list',
            icon: 'list',
        },
        {
            title: 'Hinzufügen',
            url: '/add',
            icon: 'add',
        }
    ];

    tabPages = new Array();

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage
    ) {
        /**
         * creates a new array filled with all array elements that have the index specified in return 
         * @param {any, number, object} function(value, index, array)
         */
        this.tabPages = this.appPages.filter(function(value, index, array) {
            return (index == 0 || index == 1 || index == 2);
        });

        /**
         * create the path variable and fills the value from url without "/" in it
         * @param {any} var i = 0; i < this.tabPages.length; ++i
         */
        for (var i = 0; i < this.tabPages.length; ++i) {
            this.tabPages[i].path = this.tabPages[i].url.slice(1)
        }

        console.log(this.tabPages);
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        
        this.storage.get("allNotes").then((res) => {
            if (res == null) {
                this.storage.set("allNotes", []);
            }
        })

    }
}