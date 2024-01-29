import { TestBed } from '@angular/core/testing';

import { AntecedentsService } from './antecedents.service';

describe('AntecedentsService', () => {
  let service: AntecedentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntecedentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
