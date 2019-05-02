import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsComponent } from './reactive-forms.component';
describe('ReactiveFormsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReactiveFormsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReactiveFormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reactive-forms.component.spec.js.map