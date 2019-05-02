var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GitService } from './../common/service/git-service';
import { CarService } from './../prime-defer/car.service';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb, service, gitService) {
        this.fb = fb;
        this.service = service;
        this.gitService = gitService;
        this.fg = fb.group({
            'input': fb.control('', []),
            'userName': fb.control('', []),
        });
    }
    Object.defineProperty(SearchComponent.prototype, "input", {
        get: function () {
            return this.fg.get('input');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "userName", {
        get: function () {
            return this.fg.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.resetQuery = function () {
        console.log('resetting value');
        this.fg.get('userName').setValue('');
    };
    SearchComponent.prototype.onKeypress = function () {
        var _this = this;
        console.log(this.input.value);
        this.cars = this.service.getCarsLarge().filter(function (value) {
            return value.brand.indexOf(_this.input.value) >= 0;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cars = this.service.getCarsLarge();
        this.valueChange = this.userName.valueChanges
            .debounceTime(300)
            .flatMap(function (val) {
            if (val.length > 3) {
                _this.display = true;
                return _this.gitService.queryInput(val);
            }
            else {
                _this.display = false;
                return Observable.of(null);
            }
        }).subscribe(function (response) {
            _this.searchToggle.forEach(function (item) {
                if (item.nativeElement) {
                    item.nativeElement.classList.toggle('hidden', _this.display);
                }
            });
            if (response) {
                _this.users = response.items;
            }
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    };
    __decorate([
        ViewChildren('searchToggle'),
        __metadata("design:type", QueryList)
    ], SearchComponent.prototype, "searchToggle", void 0);
    SearchComponent = __decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, CarService, GitService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map