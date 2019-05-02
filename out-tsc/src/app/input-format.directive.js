var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
var InputFormatDirective = /** @class */ (function () {
    function InputFormatDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    InputFormatDirective.prototype.onfocus = function () {
        var value = this.el.nativeElement.value;
        this.el.nativeElement.value = 'Format :' + this.appInputFormat + ' - value in lowercase: ' + value.toLowerCase();
        console.log(this.renderer);
    };
    __decorate([
        Input('appInputFormat'),
        __metadata("design:type", String)
    ], InputFormatDirective.prototype, "appInputFormat", void 0);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "onfocus", null);
    InputFormatDirective = __decorate([
        Directive({
            selector: '[appInputFormat]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], InputFormatDirective);
    return InputFormatDirective;
}());
export { InputFormatDirective };
//# sourceMappingURL=input-format.directive.js.map