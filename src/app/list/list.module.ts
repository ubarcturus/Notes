import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

import { ModalPageModule } from "../modal/modal.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModalPageModule,
        RouterModule.forChild([{
            path: '',
            component: ListPage
        }])
    ],
    declarations: [ListPage]
})
export class ListPageModule {}