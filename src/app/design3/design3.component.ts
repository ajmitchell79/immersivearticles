import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { KeywordsService } from './keywordsService';
import { ContentService } from './contentService';
import { Highlight } from './highlight.pipe';

//import kwd from 'keyword.json'

@Component({
  selector: 'app-design3',
  templateUrl: './design3.component.html',
  styleUrls: ['./design3.component.scss'],
  providers: [KeywordsService, ContentService],
})
export class Design3Component implements OnInit {

  article1 = 'Some text with keyword JP Morgan'
  relatedContent = ''
  relatedLinks = []
  constructor(
    private keywordsService: KeywordsService,
    private contentService: ContentService
  ) { 
    this.relatedLinks = contentService.getRelatedLinks();
  }

  onClick() {
    this.relatedContent = "ttrans"; 
  }

  onCloseRelatedContent() {
    this.relatedContent = "ttrans-back";
  }
  ngOnInit() {
  }

}


export class RelatedLink {
  constructor (public text: string, public link: string) {}
 }