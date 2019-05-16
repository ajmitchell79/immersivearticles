import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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

  constructor(
    private sharedService: SharedService
  ) {
    this.subscription = this.sharedService.getMessage().subscribe(message => { 
      this.relatedContent = message.text; 
    });
  
  }

  onClick() {
    this.sharedService.sendMessage("ttrans"); 
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