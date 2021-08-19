import { TestBed } from '@angular/core/testing';

import { WhereamiService } from './whereami.service';

describe('WhereamiService', () => {
  let service: WhereamiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhereamiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
