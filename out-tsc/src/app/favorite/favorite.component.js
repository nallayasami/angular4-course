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
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
        this.isFavorite = false;
        this.change = new EventEmitter();
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.toggleFavorite = function () {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ 'isFavorite': this.isFavorite });
    };
    __decorate([
        Input('isFavorite'),
        __metadata("design:type", Object)
    ], FavoriteComponent.prototype, "isFavorite", void 0);
    __decorate([
        Output('change'),
        __metadata("design:type", Object)
    ], FavoriteComponent.prototype, "change", void 0);
    FavoriteComponent = __decorate([
        Component({
            selector: 'app-favorite',
            templateUrl: './favorite.component.html',
            styleUrls: ['./favorite.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());
export { FavoriteComponent };
//# sourceMappingURL=favorite.component.js.map