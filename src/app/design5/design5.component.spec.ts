import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design5Component } from './design5.component';

describe('Design5Component', () => {
  let component: Design5Component;
  let fixture: ComponentFixture<Design5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
