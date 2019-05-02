var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
var PaymentGetwayComponent = /** @class */ (function () {
    function PaymentGetwayComponent() {
    }
    PaymentGetwayComponent.prototype.ngOnInit = function () {
    };
    PaymentGetwayComponent.prototype.ngAfterViewInit = function () {
        this.handlePayment();
    };
    PaymentGetwayComponent.prototype.ngOnChanges = function () {
        this.handlePayment();
    };
    PaymentGetwayComponent.prototype.handlePayment = function () {
        if (this.paymentForm && this.amount) {
            if (this.paymentForm.nativeElement.getElementsByTagName('script').length > 0) {
                this.handleCleanup();
            }
            this.paymentForm.nativeElement.appendChild(this.createNode());
        }
    };
    PaymentGetwayComponent.prototype.handleCleanup = function () {
        this.removeByClass('payment-gateway-script');
        this.removeByClass('razorpay-container');
        this.removeByClass('razorpay-payment-button');
    };
    PaymentGetwayComponent.prototype.removeByClass = function (className) {
        var containers = document.getElementsByClassName(className);
        for (var i = 0; i < containers.length; i++) {
            containers.item(i).remove();
        }
    };
    PaymentGetwayComponent.prototype.createNode = function () {
        var node = document.createElement('script');
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        node.classList.add('payment-gateway-script');
        node.src = 'https://checkout.razorpay.com/v1/checkout.js';
        node.setAttribute('data-key', '<key>');
        node.setAttribute('data-amount', (this.amount * 100).toString());
        node.setAttribute('data-buttontext', 'Pay with Razorpay');
        node.setAttribute('data-name', 'Merchant Name');
        node.setAttribute('data-description', 'Purchase Description');
        node.setAttribute('data-image', 'favicon.ico');
        node.setAttribute('data-prefill.name', 'Harshil Mathur');
        node.setAttribute('data-prefill.email', 'support@razorpay.com');
        node.setAttribute('data-theme.color', '#F37254');
        return node;
    };
    __decorate([
        ViewChild('paymentForm'),
        __metadata("design:type", ElementRef)
    ], PaymentGetwayComponent.prototype, "paymentForm", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PaymentGetwayComponent.prototype, "amount", void 0);
    PaymentGetwayComponent = __decorate([
        Component({
            selector: 'app-payment-getway',
            templateUrl: './payment-getway.component.html',
            styleUrls: ['./payment-getway.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PaymentGetwayComponent);
    return PaymentGetwayComponent;
}());
export { PaymentGetwayComponent };
//# sourceMappingURL=payment-getway.component.js.map