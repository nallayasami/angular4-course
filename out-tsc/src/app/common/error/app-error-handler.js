var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageServiceService } from '../service/message-service.service';
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler(injector) {
        this.injector = injector;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        var service = this.injector.get(MessageServiceService);
        var router = this.injector.get(Router);
        console.log('NKA', error);
        //  router.navigate(['/user']);
        //  router.navigate(['/user'], {queryParams:{key:value}});
        service.addMessage({ severity: 'error', summary: 'Internal Error', detail: 'Please try again later' });
    };
    AppErrorHandler = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], AppErrorHandler);
    return AppErrorHandler;
}());
export { AppErrorHandler };
//# sourceMappingURL=app-error-handler.js.map