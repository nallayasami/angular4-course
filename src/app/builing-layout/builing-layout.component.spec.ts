import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilingLayoutComponent } from './builing-layout.component';

describe('BuilingLayoutComponent', () => {
  let component: BuilingLayoutComponent;
  let fixture: ComponentFixture<BuilingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
