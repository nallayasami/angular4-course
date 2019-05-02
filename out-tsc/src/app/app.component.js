var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MessageService } from 'primeng/components/common/messageservice';
import { MessageServiceService } from './common/service/message-service.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ServiceStatusService } from './common/service/service-status.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(serviceStatus, message, messageService, cdr) {
        this.serviceStatus = serviceStatus;
        this.message = message;
        this.messageService = messageService;
        this.cdr = cdr;
        this.title = 'app';
        this.msgs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceStatus.serviceState.subscribe(function (state) {
            _this.isPending = state;
            _this.cdr.detectChanges();
        });
        this.message.message.subscribe(function (state) {
            // console.log('state msg', state);
            if (state) {
                _this.msgs.push(state);
                var msgAry_1 = _this.msgs;
                setTimeout(function () {
                    msgAry_1.splice(msgAry_1.indexOf(state), 1);
                }, 3000);
                // this.messageService.add({})
            }
            _this.cdr.detectChanges();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [ServiceStatusService,
            MessageServiceService,
            MessageService,
            ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map