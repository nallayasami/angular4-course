var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var BindingComponent = /** @class */ (function () {
    function BindingComponent() {
        this.stringVal = 'This a  input value';
        this.colSpan = 2;
        this.isSuccess = false;
    }
    BindingComponent.prototype.keyPressed = function ($event) {
        console.log('Keypress' + $event);
        this.stringVal = $event;
    };
    BindingComponent.prototype.onClick = function () {
        this.isSuccess = !this.isSuccess;
    };
    BindingComponent = __decorate([
        Component({
            selector: 'app-binding',
            templateUrl: './binding.component.html',
            styleUrls: ['./binding.component.css']
        })
    ], BindingComponent);
    return BindingComponent;
}());
export { BindingComponent };
//# sourceMappingURL=binding.component.js.map