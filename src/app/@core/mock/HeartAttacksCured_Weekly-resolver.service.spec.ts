import { TestBed } from '@angular/core/testing';

import { HeartAttacksCured_WeeklyResolverService } from './HeartAttacksCured_Weekly-resolver.service';

describe('HeartAttacksCured_WeeklyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeartAttacksCured_WeeklyResolverService = TestBed.get(HeartAttacksCured_WeeklyResolverService);
    expect(service).toBeTruthy();
  });
});
