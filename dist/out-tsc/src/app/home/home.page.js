import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.listItems = [];
        this.notesSkeleton = {
            // picture: "Bild",
            time: "Uhrzeit",
            title: "Titel",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora hic necessitatibus, aperiam eum quis nisi similique! Mollitia ut ipsa animi tempora obcaecati a similique accusamus dolorum, corrupti eligendi ea, neque."
        };
        for (var i = 0; i < 10; ++i) {
            this.listItems.push(this.notesSkeleton);
        }
    }
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map