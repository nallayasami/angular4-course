import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-payment-getway',
  templateUrl: './payment-getway.component.html',
  styleUrls: ['./payment-getway.component.css']
})
export class PaymentGetwayComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('paymentForm') paymentForm: ElementRef;
  @Input() amount: number;

  constructor() {
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.handlePayment();
  }

  ngOnChanges() {
    this.handlePayment();
  }

  private handlePayment() {
    if (this.paymentForm && this.amount) {
      if (this.paymentForm.nativeElement.getElementsByTagName('script').length > 0) {
        this.handleCleanup();
      }
      this.paymentForm.nativeElement.appendChild(this.createNode());
    }
  }

  private handleCleanup() {
    this.removeByClass('payment-gateway-script');
    this.removeByClass('razorpay-container');
    this.removeByClass('razorpay-payment-button');

  }

  private removeByClass(className: string) {
    const containers = document.getElementsByClassName(className);
    for (let i = 0; i < containers.length; i++) {
      containers.item(i).remove();
    }
  }

  private createNode() {
    const node = document.createElement('script');
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
  }

}
