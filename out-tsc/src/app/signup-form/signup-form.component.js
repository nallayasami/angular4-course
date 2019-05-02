var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StringValidators } from '../common/validators/string.validator';
var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.fg = new FormGroup({
            userName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('[a-z|A-Z]+')
            ], StringValidators.shouldBeUnique),
            password: new FormControl('', [Validators.required, Validators.minLength(8), StringValidators.containWhiteSpace]),
            address: new FormGroup({
                city: new FormControl('', [Validators.required]),
                postalCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
            })
        });
        this.isServerDown = false;
    }
    SignupFormComponent.prototype.onSubmit = function () {
        if (this.isServerDown) {
            this.fg.setErrors({ isServerDown: true });
        }
        console.log(this.fg.value);
    };
    Object.defineProperty(SignupFormComponent.prototype, "userName", {
        get: function () {
            return this.fg.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormComponent.prototype, "password", {
        get: function () {
            return this.fg.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormComponent.prototype, "city", {
        get: function () {
            return this.fg.get('address.city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormComponent.prototype, "postalCode", {
        get: function () {
            return this.fg.get('address.postalCode');
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent = __decorate([
        Component({
            selector: 'app-signup-form',
            templateUrl: './signup-form.component.html',
            styleUrls: ['./signup-form.component.css']
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());
export { SignupFormComponent };
//# sourceMappingURL=signup-form.component.js.map