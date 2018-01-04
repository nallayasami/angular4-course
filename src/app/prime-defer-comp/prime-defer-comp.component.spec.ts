import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDeferCompComponent } from './prime-defer-comp.component';

describe('PrimeDeferCompComponent', () => {
  let component: PrimeDeferCompComponent;
  let fixture: ComponentFixture<PrimeDeferCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeDeferCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeDeferCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
