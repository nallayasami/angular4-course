var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var ConfirmMessageService = /** @class */ (function () {
    function ConfirmMessageService() {
        // Observable source
        this.serviceStatus = new BehaviorSubject(null);
        // Observable stream
        this.serviceState = this.serviceStatus.asObservable();
    }
    // service command
    ConfirmMessageService.prototype.addMessage = function (message) {
        this.serviceStatus.next(message);
    };
    ConfirmMessageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfirmMessageService);
    return ConfirmMessageService;
}());
export { ConfirmMessageService };
var ConfrimMessage = /** @class */ (function () {
    function ConfrimMessage(message, navigation, severity) {
        if (severity === void 0) { severity = 'info'; }
        this.message = message;
        this.navigation = navigation;
        this.severity = severity;
    }
    return ConfrimMessage;
}());
export { ConfrimMessage };
//# sourceMappingURL=confirm-message.service.js.map