import { NgModule } from '@angular/core';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { KeywordsService } from './keywordsService';
import { ContentService } from './contentService';
import { SharedService } from './sharedService';
import { Highlight } from './highlight.pipe';
import { ArticleComponent} from './article.component';
import { Subscription } from 'rxjs';

//import kwd from 'keyword.json'

@Component({
  selector: 'app-design3',
  templateUrl: './design3.component.html',
  styleUrls: ['./design3.component.scss'],
  providers: [KeywordsService, ContentService, ArticleComponent],
})
export class Design3Component implements OnInit {
  relatedLinks = []
  subscription: Subscription;
  relatedContent = '';
 
  constructor(
    private keywordsService: KeywordsService,
    private contentService: ContentService,
    private articleComponent: ArticleComponent,
    private sharedService: SharedService
  ) { 
    this.relatedLinks = contentService.getRelatedLinks();
    this.subscription = this.sharedService.getMessage().subscribe(message => { 
      this.relatedContent = message.text; 
    });
  }

  onCloseRelatedContent() {
    this.sharedService.sendMessage("close");
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