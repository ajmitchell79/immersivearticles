import { Component, OnInit, Renderer2, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { KeywordsService } from './keywordsService';
import { ContentService } from './contentService';
import { Highlight } from './highlight.pipe';
import { SharedService } from './sharedService';
import { Subscription } from 'rxjs';

//import kwd from 'keyword.json'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [KeywordsService, ContentService],
})
export class ArticleComponent implements OnInit {
  public relatedContent = ''
  subscription: Subscription;
  articleText = '';
  constructor(
    private elementRef:ElementRef,
    private renderer: Renderer2,
    private sharedService: SharedService,
    private contentService: ContentService
  ) {
    this.subscription = this.sharedService.getClass().subscribe(message => { 
      this.relatedContent = message.text; 
      
    });
    this.articleText = this.contentService.getArticle();
  }

  ngAfterViewInit() {
    this.elementRef
      .nativeElement
      .querySelectorAll('.related-content-link')
      .forEach(element => {
        this.renderer.listen(element,'click', (p1) =>
          {
            this.sharedService.setRelatedCnt(p1.currentTarget.getAttribute('data-word'));
            this.sharedService.setClass("ttrans"); 
          } 
        )});
  }

  ngOnInit() {
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}


export class RelatedLink {
  constructor (public text: string, public link: string) {}
 }