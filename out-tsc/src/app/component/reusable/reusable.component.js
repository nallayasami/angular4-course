var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var ReusableComponent = /** @class */ (function () {
    function ReusableComponent() {
        this.reusableComponent = { isFavorite: false };
        this.likeComponent = { isLiked: true, likeCount: 10 };
    }
    ReusableComponent.prototype.isFavoriteChanged = function (changeEvent) {
        this.reusableComponent = changeEvent;
    };
    ReusableComponent.prototype.likeBtnCliked = function ($event) {
        console.log($event);
        this.likeComponent = $event;
    };
    ReusableComponent.prototype.ngOnInit = function () {
    };
    ReusableComponent = __decorate([
        Component({
            selector: 'app-reusable',
            templateUrl: './reusable.component.html',
            styleUrls: ['./reusable.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ReusableComponent);
    return ReusableComponent;
}());
export { ReusableComponent };
//# sourceMappingURL=reusable.component.js.map