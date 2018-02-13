import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGetwayComponent } from './payment-getway.component';

describe('PaymentGetwayComponent', () => {
  let component: PaymentGetwayComponent;
  let fixture: ComponentFixture<PaymentGetwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentGetwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGetwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
