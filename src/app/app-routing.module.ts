import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'list', loadChildren: './list/list.module#ListPageModule' },
    { path: 'add', loadChildren: './add/add.module#AddPageModule' },
    { path: 'test1', loadChildren: './test1/test1.module#Test1PageModule' },
    // { path: 'test2', loadChildren: './test2/test2.module#Test2PageModule' },

    // { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}