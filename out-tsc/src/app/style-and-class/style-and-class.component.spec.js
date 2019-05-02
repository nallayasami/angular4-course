import { async, TestBed } from '@angular/core/testing';
import { StyleAndClassComponent } from './style-and-class.component';
describe('StyleAndClassComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StyleAndClassComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StyleAndClassComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=style-and-class.component.spec.js.map