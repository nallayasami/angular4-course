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
import { CoursesServcie } from '../courses/courses.service';
var InterationComponent = /** @class */ (function () {
    function InterationComponent(service) {
        this.service = service;
        this.courses = service.getCourses();
    }
    InterationComponent.prototype.ngOnInit = function () {
    };
    InterationComponent.prototype.trackByMethod = function (index, item) {
        return item ? item.id : undefined;
    };
    InterationComponent.prototype.resetData = function () {
        this.courses = this.service.getCourses();
    };
    InterationComponent.prototype.delete = function (course) {
        var index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    };
    InterationComponent = __decorate([
        Component({
            selector: 'app-interation',
            templateUrl: './interation.component.html',
            styleUrls: ['./interation.component.css']
        }),
        __metadata("design:paramtypes", [CoursesServcie])
    ], InterationComponent);
    return InterationComponent;
}());
export { InterationComponent };
//# sourceMappingURL=interation.component.js.map