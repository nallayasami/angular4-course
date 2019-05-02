import { async, TestBed } from '@angular/core/testing';
import { PrimeOrderListComponent } from './prime-order-list.component';
describe('PrimeOrderListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PrimeOrderListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PrimeOrderListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prime-order-list.component.spec.js.map