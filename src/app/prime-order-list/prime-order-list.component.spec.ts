import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeOrderListComponent } from './prime-order-list.component';

describe('PrimeOrderListComponent', () => {
  let component: PrimeOrderListComponent;
  let fixture: ComponentFixture<PrimeOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
