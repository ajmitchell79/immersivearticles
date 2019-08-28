import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design6Component } from './design6.component';
import {EscapeHtmlPipe} from '../shared/escape-html-pipe.pipe';
import {Highlight} from '../design3/highlight.pipe';

describe('Design6Component', () => {
  let component: Design6Component;
  let fixture: ComponentFixture<Design6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design6Component,EscapeHtmlPipe, Highlight ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
