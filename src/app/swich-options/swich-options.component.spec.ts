import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwichOptionsComponent } from './swich-options.component';

describe('SwichOptionsComponent', () => {
  let component: SwichOptionsComponent;
  let fixture: ComponentFixture<SwichOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwichOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwichOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
