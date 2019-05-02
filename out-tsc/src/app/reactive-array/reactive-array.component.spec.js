import { async, TestBed } from '@angular/core/testing';
import { ReactiveArrayComponent } from './reactive-array.component';
describe('ReactiveArrayComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReactiveArrayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReactiveArrayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reactive-array.component.spec.js.map