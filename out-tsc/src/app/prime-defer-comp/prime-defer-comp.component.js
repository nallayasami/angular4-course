var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Car } from '../prime-defer/car.service';
var PrimeDeferCompComponent = /** @class */ (function () {
    function PrimeDeferCompComponent() {
    }
    PrimeDeferCompComponent.prototype.ngOnInit = function () {
        console.log(this.car);
    };
    __decorate([
        Input(),
        __metadata("design:type", Car)
    ], PrimeDeferCompComponent.prototype, "car", void 0);
    PrimeDeferCompComponent = __decorate([
        Component({
            selector: 'app-prime-defer-comp',
            templateUrl: './prime-defer-comp.component.html',
            styleUrls: ['./prime-defer-comp.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PrimeDeferCompComponent);
    return PrimeDeferCompComponent;
}());
export { PrimeDeferCompComponent };
//# sourceMappingURL=prime-defer-comp.component.js.map