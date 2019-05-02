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
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.like = new EventEmitter();
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent.prototype.onClick = function () {
        this.isLiked = !this.isLiked;
        this.likeCount = Number(this.likeCount) + (this.isLiked ? 1 : -1);
        this.like.emit({ 'likeCount': this.likeCount, 'isLiked': this.isLiked });
    };
    __decorate([
        Input('likeCount'),
        __metadata("design:type", Number)
    ], LikeComponent.prototype, "likeCount", void 0);
    __decorate([
        Input('isLiked'),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "isLiked", void 0);
    __decorate([
        Output('like'),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "like", void 0);
    LikeComponent = __decorate([
        Component({
            selector: 'app-like',
            templateUrl: './like.component.html',
            styleUrls: ['./like.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());
export { LikeComponent };
//# sourceMappingURL=like.component.js.map