var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { ServiceStatusService } from '../service/service-status.service';
var CustomInterceptor = /** @class */ (function () {
    function CustomInterceptor(injector) {
        this.injector = injector;
        this.count = 0;
    }
    CustomInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var serviceStatus = this.injector.get(ServiceStatusService);
        return next.handle(req)
            .do(function (request) {
            // console.log('Begins', req.url);
            if (request.type === 0) {
                _this.count++;
            }
            serviceStatus.changeState(true);
            // console.log('do', this.count);
        })
            .finally(function () {
            _this.count--;
            if (_this.count === 0) {
                serviceStatus.changeState(false);
            }
            // console.log('finally', this.count);
            // console.log('Ends');
        });
    };
    CustomInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], CustomInterceptor);
    return CustomInterceptor;
}());
export { CustomInterceptor };
//# sourceMappingURL=customInterceptor.js.map