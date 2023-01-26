import { TestBed } from '@angular/core/testing';

import { DogsResource } from './dogs.resource';

describe('DogsService', () => {
  let service: DogsResource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
