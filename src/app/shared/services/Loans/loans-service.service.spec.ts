import { TestBed } from '@angular/core/testing';

import { LoansServiceService } from './loans-service.service';

describe('LoansServiceService', () => {
  let service: LoansServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
