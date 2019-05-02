var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var CoursesServcie = /** @class */ (function () {
    function CoursesServcie() {
    }
    CoursesServcie.prototype.getCourses = function () {
        return [{
                'id': 1,
                'name': 'course 1'
            },
            {
                'id': 2,
                'name': 'course 2'
            },
            {
                'id': 3,
                'name': 'course 3'
            }
        ];
    };
    CoursesServcie = __decorate([
        Injectable()
    ], CoursesServcie);
    return CoursesServcie;
}());
export { CoursesServcie };
//# sourceMappingURL=courses.service.js.map