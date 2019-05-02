var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MessageService } from 'primeng/components/common/messageservice';
import { Input, Output, EventEmitter, Component } from '@angular/core';
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(messageService) {
        this.messageService = messageService;
        this.contentType = 'image/*';
        this.contentChange = new EventEmitter();
    }
    FileUploadComponent.prototype.upload = function (event, uploader) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.content = file;
        }
        uploader.clear();
        this.setPreview();
        this.contentChange.emit(this.content);
        this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    FileUploadComponent.prototype.setPreview = function () {
        var _this = this;
        if (this.content && this.contentType && this.contentType.startsWith('image')) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.contentUrl = event.target.result;
            };
            reader.readAsDataURL(this.content);
        }
    };
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "contentType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", File)
    ], FileUploadComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FileUploadComponent.prototype, "contentUrl", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FileUploadComponent.prototype, "contentChange", void 0);
    FileUploadComponent = __decorate([
        Component({
            selector: 'app-file-upload',
            templateUrl: './file-upload.component.html',
            styleUrls: ['./file-upload.component.css']
        }),
        __metadata("design:paramtypes", [MessageService])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
export { FileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map