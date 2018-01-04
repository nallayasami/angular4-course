import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDeferComponent } from './prime-defer.component';

describe('PrimeDeferComponent', () => {
  let component: PrimeDeferComponent;
  let fixture: ComponentFixture<PrimeDeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeDeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
