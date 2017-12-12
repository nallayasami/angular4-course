import { TestBed, inject } from '@angular/core/testing';

import { ServiceStatusService } from './service-status.service';

describe('ServiceStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceStatusService]
    });
  });

  it('should be created', inject([ServiceStatusService], (service: ServiceStatusService) => {
    expect(service).toBeTruthy();
  }));
});
