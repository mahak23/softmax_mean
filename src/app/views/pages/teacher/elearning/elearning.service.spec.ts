import { TestBed } from '@angular/core/testing';

import { ElearningService } from './elearning.service';

describe('ElearningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElearningService = TestBed.get(ElearningService);
    expect(service).toBeTruthy();
  });
});
