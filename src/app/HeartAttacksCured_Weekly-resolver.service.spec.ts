import { TestBed } from '@angular/core/testing';

import { ProfitCardResolverService } from './HeartAttacksCured_Weekly-resolver.service';

describe('ProfitCardResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfitCardResolverService = TestBed.get(ProfitCardResolverService);
    expect(service).toBeTruthy();
  });
});
