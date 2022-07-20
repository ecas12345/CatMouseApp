import { TestBed } from '@angular/core/testing';

import { CatMouseServiceService } from './cat-mouse-service.service';

describe('CatMouseServiceService', () => {
  let service: CatMouseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatMouseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
