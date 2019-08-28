import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ElementScrollPercentage } from './element-scroll-percentage.service';

describe('ElementScrollPercentageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[HttpClient]
  }));

  it('should be created', () => {
    
    const service: ElementScrollPercentage = TestBed.get(ElementScrollPercentage);
    expect(service).toBeTruthy();
  });
});
