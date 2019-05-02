var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { CourseItem } from './../courseItem.eum';
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.onClick = new EventEmitter();
        this.selectionOptions = Object.keys(CourseItem).splice(Object.keys(CourseItem).length / 2, Object.keys(CourseItem).length - 1);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onClicked = function (selection) {
        this.router.navigate(['/', selection]);
        this.selection = selection;
        // this.onClick.emit(CourseItem[selection]);
    };
    NavbarComponent.prototype.isSelected = function (option) {
        return CourseItem[option] === this.selection;
    };
    NavbarComponent.prototype.getSelectionStr = function () {
        return this.selection;
        // return CourseItem[this.selection];
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NavbarComponent.prototype, "selection", void 0);
    __decorate([
        Output('onClick'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "onClick", void 0);
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
/* off-canvas sidebar toggle */
// $('[data-toggle=offcanvas]').click(function() {
//   $('.row-offcanvas').toggleClass('active');
//   $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
// });
// function onElementHeightChange(elm, callback){
// 	var lastHeight = elm.clientHeight, newHeight;
// 	(function run(){
// 		newHeight = elm.clientHeight;
// 		if( lastHeight != newHeight )
// 			callback();
// 		lastHeight = newHeight;
//         if( elm.onElementHeightChangeTimer )
//           clearTimeout(elm.onElementHeightChangeTimer);
// 		elm.onElementHeightChangeTimer = setTimeout(run, 200);
// 	})();
// }
// onElementHeightChange(document.body, function(){
//   alert('Body height changed');
// });
// to clear the timer use:
// clearTimeout(document.body.onElementHeightChangeTimer);
//# sourceMappingURL=navbar.component.js.map