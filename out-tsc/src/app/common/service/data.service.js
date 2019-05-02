var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { NotFoundError } from './../error/NotFoundError';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BadRequsetError } from '../error/BadRequsetError';
import { BaseError } from '../error/BaseError';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.add = function (resource) {
        // return Observable.throw(new BaseError());
        return this.http.post(this.url, resource)
            .catch(this.handleError);
        // .map((response: Response) => {
        //   return response.json();
        // })
    };
    DataService.prototype.update = function (resource) {
        resource.title = resource.title + '_updated';
        return this.http.patch(this.url + resource.id, JSON.stringify(resource))
            // return this.http.put(this.url + resource.id, JSON.stringify(resource))
            .catch(this.handleError);
        // .map(response => response.json())
    };
    DataService.prototype.getAll = function () {
        return this.http
            .get(this.url)
            .catch(this.handleError);
        // .map((response: Response) => {
        //   return response.json();
        // })
    };
    DataService.prototype.get = function (id) {
        return this.http
            .get(this.url + id)
            .catch(this.handleError);
        // .map((response: Response) => {
        //   return response.json();
        // })
    };
    DataService.prototype.delete = function (id) {
        // return Observable.throw(new BaseError());
        return this.http.delete(this.url + id).catch(this.handleError);
    };
    DataService.prototype.queryInput = function (query) {
        return this.http.get(this.url, { 'params': { 'q': query } }).catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.log(error);
        if (error.status === 400) {
            return Observable.throw(new BadRequsetError(error));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new BaseError(error));
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Object, HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map