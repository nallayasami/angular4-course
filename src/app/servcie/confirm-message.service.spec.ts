import { TestBed, inject } from '@angular/core/testing';

import { ConfirmMessageService } from './confirm-message.service';

describe('ConfirmMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmMessageService]
    });
  });

  it('should be created', inject([ConfirmMessageService], (service: ConfirmMessageService) => {
    expect(service).toBeTruthy();
  }));
});
