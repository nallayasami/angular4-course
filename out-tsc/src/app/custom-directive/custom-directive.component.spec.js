import { async, TestBed } from '@angular/core/testing';
import { CustomDirectiveComponent } from './custom-directive.component';
describe('CustomDirectiveComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CustomDirectiveComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CustomDirectiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=custom-directive.component.spec.js.map