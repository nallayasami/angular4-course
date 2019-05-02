var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CoursesServcie } from './courses.service';
import { Component } from '@angular/core';
import { CourseItem } from '../courseItem.eum';
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(service) {
        this.title = 'Course List';
        this.buttonStr = 'Property binding';
        this.primaryBtn = true;
        this.counter = 0;
        this.selection = CourseItem.LazyLoading;
        this.courses = service.getCourses();
    }
    CoursesComponent.prototype.btnClicked = function () {
        this.eventStatus = 'Button clicked : '.concat((this.counter++).toString());
    };
    CoursesComponent.prototype.keyPressed = function ($event) {
        this.eventStatus = 'Key Pressed : '.concat($event.keyCode);
    };
    CoursesComponent.prototype.enterKeyPressed = function () {
        this.eventStatus = 'Key Filter event : '.concat('Enter');
    };
    CoursesComponent.prototype.templateVariable = function (input) {
        this.eventStatus = 'Template vaieable.value : '.concat(input);
    };
    CoursesComponent.prototype.onOptionSelection = function ($event) {
        this.selection = $event;
    };
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Component({
            selector: 'app-courses',
            templateUrl: './courses.component.html',
            styleUrls: ['./courses.component.css']
        }),
        __metadata("design:paramtypes", [CoursesServcie])
    ], CoursesComponent);
    return CoursesComponent;
}());
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map