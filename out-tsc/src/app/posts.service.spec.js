import { TestBed, inject } from '@angular/core/testing';
import { PostsService } from './posts.service';
describe('PostsService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PostsService]
        });
    });
    it('should be created', inject([PostsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=posts.service.spec.js.map