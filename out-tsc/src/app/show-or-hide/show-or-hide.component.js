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
var ShowOrHideComponent = /** @class */ (function () {
    function ShowOrHideComponent() {
        this.isSelected = true;
    }
    ShowOrHideComponent.prototype.ngOnInit = function () {
    };
    ShowOrHideComponent = __decorate([
        Component({
            selector: 'app-show-or-hide',
            templateUrl: './show-or-hide.component.html',
            styleUrls: ['./show-or-hide.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ShowOrHideComponent);
    return ShowOrHideComponent;
}());
export { ShowOrHideComponent };
//# sourceMappingURL=show-or-hide.component.js.map