import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ModalPage } from "../modal/modal.page";

const routes: Routes = [{
    path: '',
    component: ListPage
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ListPage, ModalPage],
    providers: [ModalController],
    entryComponents: [ModalPage],
})
export class ListPageModule {}