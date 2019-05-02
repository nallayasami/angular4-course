import { async, TestBed } from '@angular/core/testing';
import { PrimeDeferComponent } from './prime-defer.component';
describe('PrimeDeferComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PrimeDeferComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PrimeDeferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prime-defer.component.spec.js.map