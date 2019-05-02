import { async, TestBed } from '@angular/core/testing';
import { SafeTraversalComponent } from './safe-traversal.component';
describe('SafeTraversalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SafeTraversalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SafeTraversalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=safe-traversal.component.spec.js.map