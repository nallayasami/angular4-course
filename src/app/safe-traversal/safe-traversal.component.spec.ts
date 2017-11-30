import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTraversalComponent } from './safe-traversal.component';

describe('SafeTraversalComponent', () => {
  let component: SafeTraversalComponent;
  let fixture: ComponentFixture<SafeTraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
