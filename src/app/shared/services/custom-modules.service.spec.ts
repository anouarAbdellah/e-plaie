import { TestBed } from '@angular/core/testing';

import { CustomModulesService } from './custom-modules.service';

describe('CustomModulesService', () => {
  let service: CustomModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
