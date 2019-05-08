import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    /*{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },*/
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    /*  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
        { path: 'list', loadChildren: './list/list.module#ListPageModule' },
        { path: 'add', loadChildren: './add/add.module#AddPageModule' }*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}