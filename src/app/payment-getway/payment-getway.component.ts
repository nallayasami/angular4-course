import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-payment-getway',
  templateUrl: './payment-getway.component.html',
  styleUrls: ['./payment-getway.component.css']
})
export class PaymentGetwayComponent implements OnInit, AfterViewChecked {
  @ViewChild('paymentForm') paymentForm: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log(this.paymentForm.nativeElement);
    if (this.paymentForm.nativeElement) {
      console.log(this.paymentForm.nativeElement.getElementsByTagName('script'));
    }
    if (this.paymentForm && this.paymentForm.nativeElement.getElementsByTagName('script').length === 0) {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      node.src = 'https://checkout.razorpay.com/v1/checkout.js';
      node.id = 'payment-tag';

      node.setAttribute('data-key', '<key>');
      node.setAttribute('data-amount', '5000');
      node.setAttribute('data-buttontext', 'Pay with Razorpay');
      node.setAttribute('data-name', 'Merchant Name');
      node.setAttribute('data-description', 'Purchase Description');
      node.setAttribute('data-image', 'https://your-awesome-site.com/your_logo.jpg');
      node.setAttribute('data-prefill.name', 'Harshil Mathur');
      node.setAttribute('data-prefill.email', 'support@razorpay.com');
      node.setAttribute('data-theme.color', '#F37254');

      this.paymentForm.nativeElement.appendChild(node);
    }
  }

}
