import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [{
        path: 'tabs',
        component: TabsPage,
        children: [{
                path: 'home',
                children: [{
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }]
            },
            {
                path: 'list',
                children: [{
                        path: '',
                        loadChildren: '../list/list.module#ListPageModule'
                    }]
            },
            {
                path: 'add',
                children: [{
                        path: '',
                        loadChildren: '../add/add.module#AddPageModule'
                    }]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map