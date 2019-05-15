import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design3Component } from './design3.component';

describe('Design3Component', () => {
  let component: Design3Component;
  let fixture: ComponentFixture<Design3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
