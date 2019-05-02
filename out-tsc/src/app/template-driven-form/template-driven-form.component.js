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
var TemplateDrivenFormComponent = /** @class */ (function () {
    function TemplateDrivenFormComponent() {
        this.contactMethods = [{ id: '1', value: 'E-Mail' }, { id: '2', value: 'Telephone' }];
    }
    TemplateDrivenFormComponent.prototype.ngOnInit = function () {
    };
    TemplateDrivenFormComponent.prototype.log = function (x) {
        console.log(x);
    };
    TemplateDrivenFormComponent.prototype.formSubmit = function (f) {
        console.log(f);
        console.log(f.value);
    };
    TemplateDrivenFormComponent = __decorate([
        Component({
            selector: 'app-template-driven-form',
            templateUrl: './template-driven-form.component.html',
            styleUrls: ['./template-driven-form.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TemplateDrivenFormComponent);
    return TemplateDrivenFormComponent;
}());
export { TemplateDrivenFormComponent };
//# sourceMappingURL=template-driven-form.component.js.map