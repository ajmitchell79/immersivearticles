import { TestBed } from '@angular/core/testing';

import { TextAnalysisService } from './text-analysis.service';
import { HttpClient, HttpHandler,HttpBackend } from '@angular/common/http';

describe('TextAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[HttpClient, HttpHandler,HttpBackend ]
  }));

  it('should be created', () => {
    const service: TextAnalysisService = TestBed.get(TextAnalysisService);
    expect(service).toBeTruthy();
  });
});
