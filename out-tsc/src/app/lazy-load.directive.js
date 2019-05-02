var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Renderer2, ElementRef, ViewContainerRef, TemplateRef, Output, EventEmitter, ContentChild, ChangeDetectorRef } from '@angular/core';
var LazyLoadDirective = /** @class */ (function () {
    function LazyLoadDirective(el, renderer, viewContainer, cdr) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.cdr = cdr;
        this.onLoad = new EventEmitter();
    }
    LazyLoadDirective_1 = LazyLoadDirective;
    LazyLoadDirective.prototype.shouldLoad = function () {
        var response = false;
        if (this.view == null) {
            var rect = this.el.nativeElement.getBoundingClientRect();
            var docElement = document.documentElement;
            var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
            var winHeight = docElement.clientHeight;
            response = (winHeight >= rect.top);
        }
        var tl = this.el.nativeElement.classList;
        if (response) {
            tl.remove(LazyLoadDirective_1.APP_CLASS);
        }
        else if (!tl.contains(LazyLoadDirective_1.APP_CLASS)) {
            tl.add(LazyLoadDirective_1.APP_CLASS);
        }
        return response;
    };
    LazyLoadDirective.prototype.load = function () {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template);
            this.onLoad.emit();
            this.cdr.detectChanges();
        }
        else {
            console.warn('Template does not exist!');
        }
    };
    LazyLoadDirective.prototype.ngAfterViewInit = function () {
        if (this.shouldLoad()) {
            this.load();
        }
        else {
            var inst_1 = this;
            this.documentScrollListener = this.renderer.listen('window', 'scroll', function () {
                if (inst_1.shouldLoad()) {
                    inst_1.load();
                    inst_1.documentScrollListener();
                    inst_1.documentScrollListener = null;
                }
            });
            this.documentResizeListener = this.renderer.listen('window', 'resize', function () {
                if (inst_1.shouldLoad()) {
                    inst_1.load();
                    inst_1.documentResizeListener();
                    inst_1.documentResizeListener = null;
                }
            });
        }
    };
    LazyLoadDirective.prototype.ngOnDestroy = function () {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
        if (this.documentResizeListener) {
            this.documentResizeListener();
        }
    };
    var LazyLoadDirective_1;
    LazyLoadDirective.APP_CLASS = 'app-lazy-load';
    __decorate([
        Output('onLoad'),
        __metadata("design:type", EventEmitter)
    ], LazyLoadDirective.prototype, "onLoad", void 0);
    __decorate([
        ContentChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], LazyLoadDirective.prototype, "template", void 0);
    LazyLoadDirective = LazyLoadDirective_1 = __decorate([
        Directive({
            selector: '[appLazyLoad]'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            ViewContainerRef,
            ChangeDetectorRef])
    ], LazyLoadDirective);
    return LazyLoadDirective;
}());
export { LazyLoadDirective };
//# sourceMappingURL=lazy-load.directive.js.map