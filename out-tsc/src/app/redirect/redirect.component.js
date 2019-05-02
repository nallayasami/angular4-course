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
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(activatedRoute, router, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap
            .subscribe(function (parmMap) {
            var url = parmMap.get('url');
            if (url) {
                _this.router.navigate([url]);
            }
            else {
                _this.location.back();
            }
        });
    };
    RedirectComponent = __decorate([
        Component({
            selector: 'app-redirect',
            templateUrl: './redirect.component.html',
            styleUrls: ['./redirect.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router, Location])
    ], RedirectComponent);
    return RedirectComponent;
}());
export { RedirectComponent };
//# sourceMappingURL=redirect.component.js.map