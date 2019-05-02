var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var GithubUserComponent = /** @class */ (function () {
    function GithubUserComponent() {
    }
    GithubUserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", GitUser)
    ], GithubUserComponent.prototype, "user", void 0);
    GithubUserComponent = __decorate([
        Component({
            selector: 'app-github-user',
            templateUrl: './github-user.component.html',
            styleUrls: ['./github-user.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], GithubUserComponent);
    return GithubUserComponent;
}());
export { GithubUserComponent };
var GitUser = /** @class */ (function () {
    function GitUser() {
    }
    return GitUser;
}());
export { GitUser };
//# sourceMappingURL=github-user.component.js.map