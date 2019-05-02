var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MessageServiceService } from './../common/service/message-service.service';
import { UserService } from './../common/service/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(service, router, messageService) {
        this.service = service;
        this.router = router;
        this.messageService = messageService;
    }
    Object.defineProperty(UserDetailsComponent.prototype, "name", {
        get: function () {
            return this.user.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailsComponent.prototype, "email", {
        get: function () {
            return this.user.email;
        },
        enumerable: true,
        configurable: true
    });
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*can be used but not updated on same component rerender
        this.router.snapshot*/
        Observable.combineLatest([this.router.paramMap, this.router.queryParams])
            .switchMap(function (paramMap) {
            console.log(paramMap[0].get('userId'));
            return _this.service.get(paramMap[0].get('userId'));
        }).subscribe(function (output) {
            _this.user = output;
            _this.messageService.addMessage({ severity: 'success', summary: 'Used Loaded ', detail: 'User loaded successfully' });
        });
        // this.router.paramMap.subscribe((value) => {
        //   this.service.get(value.get('userId')).subscribe((output) => {
        //   });
        // });
    };
    UserDetailsComponent = __decorate([
        Component({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        }),
        __metadata("design:paramtypes", [UserService, ActivatedRoute, MessageServiceService])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map