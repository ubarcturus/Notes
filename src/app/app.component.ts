import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
            title: 'List',
            url: '/list',
            icon: 'list',
        },
        {
            title: 'Add',
            url: '/add',
            icon: 'add',
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        var appPagesIndex = [1, 3];

        var tabPages = this.appPages.filter(function(value, index, array) {
            return (index == 1);
        });

        console.log(tabPages);
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}