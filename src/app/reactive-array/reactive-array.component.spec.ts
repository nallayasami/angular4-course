import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveArrayComponent } from './reactive-array.component';

describe('ReactiveArrayComponent', () => {
  let component: ReactiveArrayComponent;
  let fixture: ComponentFixture<ReactiveArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
