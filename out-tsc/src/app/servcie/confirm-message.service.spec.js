import { TestBed, inject } from '@angular/core/testing';
import { ConfirmMessageService } from './confirm-message.service';
describe('ConfirmMessageService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ConfirmMessageService]
        });
    });
    it('should be created', inject([ConfirmMessageService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=confirm-message.service.spec.js.map