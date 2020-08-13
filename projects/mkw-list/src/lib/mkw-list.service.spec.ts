import { TestBed } from '@angular/core/testing';

import { MkwListService } from './mkw-list.service';

describe('MkwListService', () => {
  let service: MkwListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MkwListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
