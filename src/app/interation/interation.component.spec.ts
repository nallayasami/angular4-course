import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterationComponent } from './interation.component';

describe('InterationComponent', () => {
  let component: InterationComponent;
  let fixture: ComponentFixture<InterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
