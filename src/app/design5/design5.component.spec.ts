import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design5Component } from './design5.component';
import { HttpClient, HttpHandler,HttpBackend } from '@angular/common/http';

describe('Design5Component', () => {
  let component: Design5Component;
  let fixture: ComponentFixture<Design5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design5Component ],
      providers:[HttpClient,HttpHandler,HttpBackend ]
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
