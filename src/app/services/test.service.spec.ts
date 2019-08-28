import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClient, HttpHandler,HttpBackend } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[HttpClient, HttpHandler,AuthenticationService,HttpBackend]
  }));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
});
