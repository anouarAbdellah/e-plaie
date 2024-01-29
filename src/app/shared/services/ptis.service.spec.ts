import { TestBed } from '@angular/core/testing';

import { PtisService } from './ptis.service';

describe('PtisService', () => {
  let service: PtisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
