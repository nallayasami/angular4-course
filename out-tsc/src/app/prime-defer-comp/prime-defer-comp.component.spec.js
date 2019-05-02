import { async, TestBed } from '@angular/core/testing';
import { PrimeDeferCompComponent } from './prime-defer-comp.component';
describe('PrimeDeferCompComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PrimeDeferCompComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PrimeDeferCompComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prime-defer-comp.component.spec.js.map