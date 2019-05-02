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
var ScriptLoadingComponent = /** @class */ (function () {
    function ScriptLoadingComponent() {
        var node = document.createElement('script');
        node.src = '/assets/script-loading.script.js';
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    ScriptLoadingComponent.prototype.ngOnInit = function () {
    };
    ScriptLoadingComponent.prototype.ngAfterViewInit = function () {
    };
    ScriptLoadingComponent.prototype.ngAfterViewChecked = function () {
        // console.log('ngAfterViewChecked', window['myFn']);
        if (!!window['myFn']) {
            window['myFn']('From the ngAfterViewChecked');
        }
    };
    ScriptLoadingComponent = __decorate([
        Component({
            selector: 'app-script-loading',
            templateUrl: './script-loading.component.html',
            styleUrls: ['./script-loading.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ScriptLoadingComponent);
    return ScriptLoadingComponent;
}());
export { ScriptLoadingComponent };
//# sourceMappingURL=script-loading.component.js.map