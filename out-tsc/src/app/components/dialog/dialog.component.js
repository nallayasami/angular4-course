var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConfirmMessageService } from './../../servcie/confirm-message.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
var DialogComponent = /** @class */ (function () {
    function DialogComponent(router, messageServcie) {
        this.router = router;
        this.messageServcie = messageServcie;
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.messageServcie.serviceState
            .subscribe(function (res) {
            _this.message = res;
            _this.showDialog();
        });
    };
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DialogComponent.prototype.onHide = function () {
        var url = this.message.navigation;
        this.visible = false;
        this.message = null;
        this.router.navigate(['/redirect'], { queryParams: { url: url } });
    };
    DialogComponent.prototype.showDialog = function () {
        this.visible = true;
    };
    DialogComponent = __decorate([
        Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.css']
        }),
        __metadata("design:paramtypes", [Router, ConfirmMessageService])
    ], DialogComponent);
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map