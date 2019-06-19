import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-add',
    templateUrl: 'add.page.html',
    styleUrls: ['add.page.scss'],
})

export class AddPage implements OnInit {

    myphoto = "../../assets/icon/favicon.png";

    ngOnInit() {}

    constructor(private camera: Camera) {}

    foto(source) {
            const options: CameraOptions = { // Einstellungen für die Kamera: https://github.com/apache/cordova-plugin-camera#cameracameraoptions--object
                sourceType: 1, // Quelle des Bildes (Fotogalerie, 0), (Kamera, 1), (Fotoordner, 2)
                quality: 100, // Die Qualität gibt an, wie scharf das Bild ist. Bis Stufe 70 sollte man keine Änderungen wahrnehmen können
                destinationType: 1, // Zieltyp des Bildes (DATA_URL, 0), (FILE_URI, 1), (NATIVE_URI, 2)
                encodingType: 0, // Zielformat des Bildes (JPEG, 0), (PNG, 1)
                mediaType: 2, // Nur wenn sourceType 0 oder 2: Angezeigte Dateitypen: Bild (PICTURE, 0), Video (VIDEO, 1), frei (ALLMEDIA, 2)
                // saveToPhotoAlbum: true, // ob das erstellte Bild in die Galerie gespeichert werden soll
                // allowEdit: true, // ob das erstellte Bild editiert werden soll
                correctOrientation: true, //dreht das Bild, dass es richtig herum angezeigt wird
                // targetHeight: 200, // Die Höhe des Bildes in Pixel
                // targetWidth: 200 // Die Breite des Bildes in Pixel
            }
            if (source == 'gallery') {
                options.sourceType = 0;
                options.saveToPhotoAlbum = false;
            }
            this.camera.getPicture(options).then((imageData) => { // Das Bild wird gemacht
                this.myphoto = imageData;
            }, (err) => {
                console.log("Fehler bei der Kamera:", err); // Falls etwas schief geht, wird die Errormeldung ausgegeben
            });

            this.camera.getPicture(options).then((imageData) => {
                this.myphoto = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            }, (err) => {
                alert("error "+JSON.stringify(err))
            });

    // this.myphoto = 'data:image/jpeg;base64,' + imageData;

    // this.camera.getPicture(options).then((imageData) => { // Das Bild wird gemacht
    //     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //     console.log("Fehler bei der Kamera:", err); // Falls etwas schief geht, wird der Error ausgegeben
    // });
    }

    /*gallery(gallery) {
        const options: CameraOptions = { // Einstellungen für die Kamera: https://github.com/apache/cordova-plugin-camera#cameracameraoptions--object
            sourceType: 0, // Quelle des Bildes (Fotogalerie, 0), (Kamera, 1), (Fotoordner, 2)
            quality: 100, // Die Qualität gibt an, wie scharf das Bild ist. Bis Stufe 70 sollte man keine Änderungen wahrnehmen können
            destinationType: 1, // Zieltyp des Bildes (DATA_URL, 0), (FILE_URI, 1), (NATIVE_URI, 2)
            encodingType: 0, // Zielformat des Bildes (JPEG, 0), (PNG, 1)
            mediaType: 2, // Nur wenn sourceType 0 oder 2: Angezeigte Dateitypen: Bild (PICTURE, 0), Video (VIDEO, 1), frei (ALLMEDIA, 2)
            // saveToPhotoAlbum: true, // ob das erstellte Bild in die Galerie gespeichert werden soll
            allowEdit: true, // ob das erstellte Bild editiert werden soll
            correctOrientation: true, //dreht das Bild, dass es richtig herum angezeigt wird
            // targetHeight: 200, // Die Höhe des Bildes in Pixel
            // targetWidth: 200 // Die Breite des Bildes in Pixel
        }
        this.camera.getPicture(options).then(imageURI => { // Das Bild wird gemacht
            this.myphoto = imageURI;
        })*/
}