import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddPage } from './add.page';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [{
    path: '',
    component: AddPage
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        IonicStorageModule.forRoot()
    ],

    providers: [Camera],

    declarations: [AddPage]
})
export class AddPageModule {}