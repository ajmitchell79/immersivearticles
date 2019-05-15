import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {
    public getRelatedLinks() {
      return [
        new RelatedLink("Need more gold", "http://google.com/search?q=gold"),
        new RelatedLink("Some more reading", "http://google.com/search?q=reading"),
        new RelatedLink("Money & Money", "http://google.com/search?q=money"),
        new RelatedLink("Futures", "http://google.com/search?q=futures")
  
      ];
    }
  }

  export class RelatedLink {
    constructor (public text: string, public link: string) {}
   }