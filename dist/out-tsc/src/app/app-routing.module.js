import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    /*{
        path: 'home',
        redirectTo: './tabs/tabs.module#TabsPageModule',
        pathMatch: 'full'
    },*/
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'list', loadChildren: './list/list.module#ListPageModule' },
    { path: 'add', loadChildren: './add/add.module#AddPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map