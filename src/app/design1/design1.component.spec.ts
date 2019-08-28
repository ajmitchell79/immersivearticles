import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design1Component } from './design1.component';
import {EscapeHtmlPipe} from '../shared/escape-html-pipe.pipe';
import {ChartComponent} from '../shared/chart/chart.component';
import {Highlight} from '../design3/highlight.pipe';

describe('Design1Component', () => {
  let component: Design1Component;
  let fixture: ComponentFixture<Design1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design1Component,EscapeHtmlPipe,ChartComponent, Highlight ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
