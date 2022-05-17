import { TestBed } from '@angular/core/testing';

import { StockinfoService } from './stockinfo.service';

describe('StockinfoService', () => {
  let service: StockinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
