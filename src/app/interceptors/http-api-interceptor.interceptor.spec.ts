import { TestBed } from '@angular/core/testing';

import { HttpApiInterceptor } from './http-api.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpApiInterceptor = TestBed.inject(HttpApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
