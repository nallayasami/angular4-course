import { TestBed, inject } from '@angular/core/testing';
import { ServiceStatusService } from './service-status.service';
describe('ServiceStatusService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ServiceStatusService]
        });
    });
    it('should be created', inject([ServiceStatusService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=service-status.service.spec.js.map