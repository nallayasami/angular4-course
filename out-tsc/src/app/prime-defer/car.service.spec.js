import { TestBed, inject } from '@angular/core/testing';
import { CarService } from './car.service';
describe('CarService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CarService]
        });
    });
    it('should be created', inject([CarService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=car.service.spec.js.map