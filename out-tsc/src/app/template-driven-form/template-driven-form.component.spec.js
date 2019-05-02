import { async, TestBed } from '@angular/core/testing';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
describe('TemplateDrivenFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TemplateDrivenFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TemplateDrivenFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=template-driven-form.component.spec.js.map