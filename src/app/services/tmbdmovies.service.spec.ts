import { TestBed } from '@angular/core/testing';

import { TMBDmoviesService } from './tmbdmovies.service';

describe('TMBDmoviesService', () => {
  let service: TMBDmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMBDmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
