import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotManagerComponent } from './slot-manager.component';

describe('SlotManagerComponent', () => {
  let component: SlotManagerComponent;
  let fixture: ComponentFixture<SlotManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
