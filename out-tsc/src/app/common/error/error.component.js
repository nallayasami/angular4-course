var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AbstractControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    Object.defineProperty(ErrorComponent.prototype, "formControl", {
        get: function () {
            return this.fromGroup.get(this.controlName);
        },
        enumerable: true,
        configurable: true
    });
    ErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input('fromGroup'),
        __metadata("design:type", AbstractControl)
    ], ErrorComponent.prototype, "fromGroup", void 0);
    __decorate([
        Input('controlName'),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "controlName", void 0);
    __decorate([
        Input('alias'),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "alias", void 0);
    ErrorComponent = __decorate([
        Component({
            selector: 'app-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map