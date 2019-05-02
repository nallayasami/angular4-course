var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var PrimeOrderListComponent = /** @class */ (function () {
    function PrimeOrderListComponent() {
        this.carsOrg = [];
    }
    PrimeOrderListComponent.prototype.ngOnInit = function () {
        this.cars = Array.prototype.concat(new Car('1', 'BMV', 9), new Car('2', 'MC', 4), new Car('3', 'VW', 2), new Car('4', 'Audi', 1));
        this.carsOrg = this.cars.map(function (car) {
            return car.id;
        });
    };
    PrimeOrderListComponent.prototype.onReorder = function () {
        var _this = this;
        // Find first and last index
        var startIndex = null;
        var endIndex = 0;
        this.cars.forEach(function (item, index) {
            if (_this.carsOrg[index] !== item.id) {
                if (startIndex === null) {
                    startIndex = index;
                }
                endIndex = index + 1;
            }
        });
        // Find Max sort order
        var maxSortOrder = 0;
        if (endIndex > 0) {
            var subSet = this.cars.slice(startIndex, endIndex);
            subSet.forEach(function (value) {
                if (value.sort_order > maxSortOrder) {
                    maxSortOrder = value.sort_order;
                }
            });
            // Creates a request Object SortOrder - {id: number, sort_order: number}
            console.log(subSet.map(function (value) { return new SortOrder(value.id, maxSortOrder--); }));
        }
    };
    PrimeOrderListComponent = __decorate([
        Component({
            selector: 'app-prime-order-list',
            templateUrl: './prime-order-list.component.html',
            styleUrls: ['./prime-order-list.component.css']
        })
    ], PrimeOrderListComponent);
    return PrimeOrderListComponent;
}());
export { PrimeOrderListComponent };
var Car = /** @class */ (function () {
    function Car(id, brand, sort_order) {
        this.id = id;
        this.brand = brand;
        this.sort_order = sort_order;
    }
    return Car;
}());
export { Car };
var SortOrder = /** @class */ (function () {
    function SortOrder(id, sort_order) {
        this.id = id;
        this.sort_order = sort_order;
    }
    return SortOrder;
}());
export { SortOrder };
//# sourceMappingURL=prime-order-list.component.js.map