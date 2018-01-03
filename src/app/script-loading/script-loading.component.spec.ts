import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptLoadingComponent } from './script-loading.component';

describe('ScriptLoadingComponent', () => {
  let component: ScriptLoadingComponent;
  let fixture: ComponentFixture<ScriptLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
