import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ListPage = /** @class */ (function () {
    function ListPage() {
        this.listItems = [];
        for (var i = 1; i < 11; i++) {
            this.listItems.push({
                title: 'Überschrift ' + i,
                dateTime: 'Datum und Zeit',
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptatem, dolores explicabo aperiam facilis praesentium, deserunt, sit sed aut quod cupiditate. Porro recusandae ipsa dicta nihil voluptas neque, distinctio, iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum delectus, eius perferendis quam sed iure laudantium officiis. Tempore dolorum, debitis dolor itaque quis vero facilis facere quos sunt, officiis pariatur.",
            });
        }
    }
    ListPage.prototype.ngOnInit = function () { };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: 'list.page.html',
            styleUrls: ['list.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map