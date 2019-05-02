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
import { FormGroup, FormArray, FormControl } from '@angular/forms';
var ReactiveArrayComponent = /** @class */ (function () {
    function ReactiveArrayComponent() {
        this.form = new FormGroup({
            courses: new FormArray([])
        });
    }
    ReactiveArrayComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ReactiveArrayComponent.prototype, "courses", {
        get: function () {
            return this.form.get('courses');
        },
        enumerable: true,
        configurable: true
    });
    ReactiveArrayComponent.prototype.addCourse = function (input) {
        if (input.value) {
            this.courses.push(new FormControl(input.value));
        }
        input.value = '';
    };
    ReactiveArrayComponent.prototype.removeCourse = function (course) {
        var index = this.courses.controls.indexOf(course);
        this.courses.removeAt(index);
    };
    ReactiveArrayComponent = __decorate([
        Component({
            selector: 'app-reactive-array',
            templateUrl: './reactive-array.component.html',
            styleUrls: ['./reactive-array.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ReactiveArrayComponent);
    return ReactiveArrayComponent;
}());
export { ReactiveArrayComponent };
//# sourceMappingURL=reactive-array.component.js.map