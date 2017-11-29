import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAndClassComponent } from './style-and-class.component';

describe('StyleAndClassComponent', () => {
  let component: StyleAndClassComponent;
  let fixture: ComponentFixture<StyleAndClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleAndClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleAndClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
