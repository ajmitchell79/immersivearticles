import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Design3Component } from './design3.component';

import {ArticleComponent} from './article.component';
import {Highlight} from '../design3/highlight.pipe';

describe('Design3Component', () => {
  let component: Design3Component;
  let fixture: ComponentFixture<Design3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Design3Component,ArticleComponent,Highlight ]
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
