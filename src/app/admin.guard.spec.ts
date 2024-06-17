import { TestBed } from '@angular/core/testing';

import { adminGuard} from './admin.guard';

describe('AuthguardService', () => {
  let service: adminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(adminGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
