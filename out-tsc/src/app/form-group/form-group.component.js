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
import { FormGroup } from '@angular/forms';
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
    }
    Object.defineProperty(FormGroupComponent.prototype, "formControl", {
        get: function () {
            return this.fGroup.get(this.controlName);
        },
        enumerable: true,
        configurable: true
    });
    FormGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input('fGroup'),
        __metadata("design:type", FormGroup)
    ], FormGroupComponent.prototype, "fGroup", void 0);
    __decorate([
        Input('controlName'),
        __metadata("design:type", String)
    ], FormGroupComponent.prototype, "controlName", void 0);
    __decorate([
        Input('alias'),
        __metadata("design:type", String)
    ], FormGroupComponent.prototype, "alias", void 0);
    FormGroupComponent = __decorate([
        Component({
            selector: 'app-form-group',
            templateUrl: './form-group.component.html',
            styleUrls: ['./form-group.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FormGroupComponent);
    return FormGroupComponent;
}());
export { FormGroupComponent };
//# sourceMappingURL=form-group.component.js.map