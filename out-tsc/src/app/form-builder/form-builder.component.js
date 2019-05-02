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
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent(fb) {
        this.fb = fb;
        this.form = fb.group({
            'fullName': fb.control('', [Validators.required]),
            'address': fb.group({
                'city': fb.control('')
            })
        });
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
    };
    FormBuilderComponent.prototype.log = function () {
        console.log(this.form.value);
    };
    FormBuilderComponent = __decorate([
        Component({
            selector: 'app-form-builder',
            templateUrl: './form-builder.component.html',
            styleUrls: ['./form-builder.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());
export { FormBuilderComponent };
//# sourceMappingURL=form-builder.component.js.map