var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NotFoundError } from './../common/error/NotFoundError';
import { PostsService } from './../posts.service';
import { Component } from '@angular/core';
import { BadRequsetError } from '../common/error/BadRequsetError';
var PostsComponent = /** @class */ (function () {
    // form: FormGroup;
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id).subscribe(function () { }, function (error) {
            // this.form.setErrors({ loginFaild: true });
            _this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError) {
                // some logging and error display
                alert('Resource not found');
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent.prototype.addPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.add(post).subscribe(function (response) { return post.id = response.id; }, function (error) {
            _this.posts.splice(0, 1);
            if (error instanceof BadRequsetError) {
                // some logging and error display
                // this.form.setErrors(error.error.json);
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.update(post).subscribe(function (response) { return console.log(response); });
    };
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent = __decorate([
        Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }),
        __metadata("design:paramtypes", [PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map