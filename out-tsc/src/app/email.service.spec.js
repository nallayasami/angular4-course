import { TestBed, inject } from '@angular/core/testing';
import { EmailService } from './email.service';
describe('EmailService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [EmailService]
        });
    });
    it('should be created', inject([EmailService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=email.service.spec.js.map