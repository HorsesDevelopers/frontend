import { TestBed } from '@angular/core/testing';

import { PondDetailService } from './pond-detail.service';

describe('PondDetailService', () => {
  let service: PondDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PondDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
