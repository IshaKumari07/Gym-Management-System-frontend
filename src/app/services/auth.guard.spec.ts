// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { authGuard } from './auth.guard';

// describe('authGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => authGuard(...gu));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { authGuard } from './auth.guard';



describe('AdminGuard', () => {
  let guard: authGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(authGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
