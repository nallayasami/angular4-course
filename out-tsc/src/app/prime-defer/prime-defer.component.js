var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CarService } from './car.service';
import { Component } from '@angular/core';
var PrimeDeferComponent = /** @class */ (function () {
    function PrimeDeferComponent(carService) {
        this.carService = carService;
    }
    PrimeDeferComponent.prototype.ngOnInit = function () {
        this.cars = this.carService.getCarsLarge();
    };
    PrimeDeferComponent.prototype.initData = function () {
        // console.log('On Init');
        // console.log(arguments);
    };
    PrimeDeferComponent = __decorate([
        Component({
            selector: 'app-prime-defer',
            templateUrl: './prime-defer.component.html',
            styleUrls: ['./prime-defer.component.css']
        }),
        __metadata("design:paramtypes", [CarService])
    ], PrimeDeferComponent);
    return PrimeDeferComponent;
}());
export { PrimeDeferComponent };
//# sourceMappingURL=prime-defer.component.js.map