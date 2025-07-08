import { TestBed } from '@angular/core/testing';

import { SchedulePendingService } from './schedule-pending.service';

describe('SchedulePendingService', () => {
  let service: SchedulePendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulePendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
