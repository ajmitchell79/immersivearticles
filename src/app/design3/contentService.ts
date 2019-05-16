import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ContentService {

public getArticle () {
  let text = `<span (click)="onClick()"
  style="text-decoration:underline;color:#D40915;">JPMorgan</span>`

  return `<div id="u18_div" class="" tabindex="0"></div>
  <div id="u18_text" class="text ">
    <p><span style="color:#333333;">One of the first things I was taught as a keen young FX trader, back in the
        days when you could smoke or fight on the trading floor and when computer screens were deeper than they
        were wide, was that ‘the trend is your friend.’ That is certainly the case in this year’s Euromoney FX
        survey for those firms that are the beneficiaries of the FX market’s recent evolution.&nbsp; </span></p>
    <p><span style="color:#333333;"><br></span></p>
    <p><span style="color:#333333;">For those caught on the wrong side, the trend is much less friendly. </span>
    </p>
    <p><span style="color:#333333;"><br></span></p>
    <p>This year’s winner by overall market share,  JPMorgan – only the
        fourth bank ever to have won the survey – is certainly on the right side of things. Up from sixth in 2014,
        when it had an overall share of 5.55%, the bank’s rise has been steady every year under long-time business
        leader Troy Rohrbaugh.</p>
  </div>`;
}

    public getRelatedLinks(word) {
      switch (word) {
        case "Euromoney":
          return [
            new RelatedLink("Euromoney magazine", "https://www.euromoney.com/magazine"),
            new RelatedLink("Markets", "https://www.euromoney.com/markets"),
            new RelatedLink("News and Opinion", "https://www.euromoney.com/news-and-opinion")
          ];
        case "JPMorgan":
          return [
            new RelatedLink("JPMorgan", "https://www.jpmorgan.com/country/GB/en/jpmorgan"),
            new RelatedLink("Insights", "https://www.jpmorgan.com/country/GB/EN/insights"),
            new RelatedLink("Solutions", "https://www.jpmorgan.com/country/GB/EN/solutions")
          ];
        default:
        return [
          new RelatedLink("Need more gold", "http://google.com/search?q=gold"),
          new RelatedLink("Some more reading", "http://google.com/search?q=reading"),
          new RelatedLink("Get some Money", "http://google.com/search?q=money"),
          new RelatedLink("Futures", "http://google.com/search?q=futures")
        ];

        }
    } 
  }

  export class RelatedLink {
    constructor (public text: string, public link: string) {}
   }