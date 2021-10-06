import { TestBed } from '@angular/core/testing';

import { EvenGuard } from './even.guard';

describe('EvenGuard', () => {
  let guard: EvenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EvenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
