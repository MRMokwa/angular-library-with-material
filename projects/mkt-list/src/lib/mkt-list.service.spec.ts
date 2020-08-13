import { TestBed } from '@angular/core/testing';

import { MktListService } from './mkt-list.service';

describe('MktListService', () => {
  let service: MktListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MktListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
