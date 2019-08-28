import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2Component } from './design2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Design2Component', () => {
  let component: Design2Component;
  let fixture: ComponentFixture<Design2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ Design2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Design2Component', () => {
    expect(component).toBeTruthy();
  });
});
