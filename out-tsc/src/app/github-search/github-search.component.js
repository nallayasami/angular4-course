var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, HostListener, Output } from '@angular/core';
var GithubSearchComponent = /** @class */ (function () {
    function GithubSearchComponent() {
        this.displayChange = new EventEmitter();
        this.onClose = new EventEmitter();
    }
    GithubSearchComponent.prototype.onEsc = function ($event) {
        if ($event.keyCode === 27) {
            this.reset();
        }
    };
    GithubSearchComponent.prototype.reset = function () {
        this.display = false;
        this.query = '';
        this.displayChange.emit(this.display);
        this.onClose.emit({});
    };
    GithubSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GithubSearchComponent.prototype, "display", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], GithubSearchComponent.prototype, "displayChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GithubSearchComponent.prototype, "query", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], GithubSearchComponent.prototype, "onClose", void 0);
    __decorate([
        HostListener('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], GithubSearchComponent.prototype, "onEsc", null);
    GithubSearchComponent = __decorate([
        Component({
            selector: 'app-github-search',
            templateUrl: './github-search.component.html',
            styleUrls: ['./github-search.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], GithubSearchComponent);
    return GithubSearchComponent;
}());
export { GithubSearchComponent };
//# sourceMappingURL=github-search.component.js.map