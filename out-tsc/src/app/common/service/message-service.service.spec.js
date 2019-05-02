import { TestBed, inject } from '@angular/core/testing';
import { MessageServiceService } from './message-service.service';
describe('MessageServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MessageServiceService]
        });
    });
    it('should be created', inject([MessageServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=message-service.service.spec.js.map