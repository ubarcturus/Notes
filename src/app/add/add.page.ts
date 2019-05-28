import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-add',
    templateUrl: 'add.page.html',
    styleUrls: ['add.page.scss'],
})

export class AddPage implements OnInit {

	myphoto = "../../assets/icon/favicon.png";

    ngOnInit() {}

    constructor(private camera: Camera) {}

    foto() {
        const options: CameraOptions = { // Einstellungen für die Kamera
            quality: 100, // Die Qualität gibt an, wie scharf das Bild ist. Bis Stufe 70 sollte man keine Änderungen wahrnehmen könne
            destinationType: this.camera.DestinationType.FILE_URI, // Zieltyp des Bildes
            encodingType: this.camera.EncodingType.JPEG, // Zielformat des Bildes
            mediaType: this.camera.MediaType.PICTURE, // Ob ein Bild (PICTURE) oder ein Video (VIDEO) erstellt wird
            saveToPhotoAlbum: true, // ob das erstellte Bild in die Gallerie gespeichert werden soll
            allowEdit: true, // ob das erstellte Bild editiert werden soll
            targetHeight: 200, // Die Höhe des Bildes in Pixel
            targetWidth: 200 // Die Breite des Bildes in Pixel
        }
        this.camera.getPicture(options).then(imageData => { // Das Bild wird gemacht
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log("Fehler bei der Kamera:", err); // Falls etwas schief geht, wird der Error ausgegeben
        });
    }
}