import { TestBed, async, inject } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptor]
    });
  });

  it('should ...', inject([TokenInterceptor], (guard: TokenInterceptor) => {
    expect(guard).toBeTruthy();
  }));
});
