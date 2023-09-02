import { TestBed } from '@angular/core/testing';

import { SupernaturalService } from './supernatural.service';

describe('SupernaturalService', () => {
  let service: SupernaturalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupernaturalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
