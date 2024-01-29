import { TestBed } from '@angular/core/testing';

import { WoundsService } from './wounds.service';

describe('WoundsService', () => {
  let service: WoundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
