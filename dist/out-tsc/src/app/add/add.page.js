import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
var AddPage = /** @class */ (function () {
    function AddPage(camera) {
        this.camera = camera;
        this.myphoto = "../../assets/icon/favicon.png";
    }
    AddPage.prototype.ngOnInit = function () { };
    AddPage.prototype.foto = function (source) {
        var _this = this;
        var options = {
            sourceType: 1,
            quality: 100,
            destinationType: 1,
            encodingType: 0,
            mediaType: 2,
            saveToPhotoAlbum: true,
            // allowEdit: true, // ob das erstellte Bild editiert werden soll
            correctOrientation: true,
        };
        if (source == 'gallery') {
            options.sourceType = 0;
            options.saveToPhotoAlbum = false;
        }
        this.camera.getPicture(options).then(function (imageURI) {
            _this.myphoto = imageURI, function (err) { return console.log(err); };
        }, function (err) {
            console.log("Fehler bei der Kamera:", err); // Falls etwas schief geht, wird die Errormeldung ausgegeben
        });
    };
    AddPage = tslib_1.__decorate([
        Component({
            selector: 'app-add',
            templateUrl: 'add.page.html',
            styleUrls: ['add.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera])
    ], AddPage);
    return AddPage;
}());
export { AddPage };
//# sourceMappingURL=add.page.js.map