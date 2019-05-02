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
var PipeComponent = /** @class */ (function () {
    function PipeComponent() {
        this.pipesObject = {
            numberValue: 12548,
            stringValue: 'Test the bigger String with multiple char',
            date: new Date(),
            decimalVal: 124.4557,
            stringLimit: 10
        };
    }
    PipeComponent.prototype.ngOnInit = function () {
    };
    PipeComponent = __decorate([
        Component({
            selector: 'app-pipe',
            templateUrl: './pipe.component.html',
            styleUrls: ['./pipe.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PipeComponent);
    return PipeComponent;
}());
export { PipeComponent };
//# sourceMappingURL=pipe.component.js.map