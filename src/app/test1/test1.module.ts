import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { Test1Page } from './test1.page';
import { Test2Page } from '../test2/test2.page';

const routes: Routes = [{
    path: '',
    component: Test1Page
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [Test1Page, Test2Page],
    providers: [ModalController],
    entryComponents: [Test2Page],
})
export class Test1PageModule {}