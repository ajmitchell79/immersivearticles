import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ContentService {

public getArticle () {
  return `<div class="item-container">
          One of the first things I was taught as a keen young FX trader, back in the days when you could smoke or fight on the trading floor and when computer screens were deeper than they were wide, was that ‘the trend is your friend.’ That is certainly the case in this year’s Euromoney FX survey for those firms that are the beneficiaries of the FX market’s recent evolution.  
          <p>
          For those caught on the wrong side, the trend is much less friendly. 
          <p>
          This year’s winner by overall market share, JPMorgan – only the fourth bank ever to have won the survey – is certainly on the right side of things. Up from sixth in 2014, when it had an overall share of 5.55%, the bank’s rise has been steady every year under long-time business leader Troy Rohrbaugh. 
          <p>
          Its top slot in this survey with a share of 12.13% had an air of predictable inevitability about it. Indeed, in the piece I wrote for last year’s survey I’m happy to say that I did predict it. 
          <p>
          Much less predictable was the sudden downturn in Citi’s fortunes. Firmly on top of the table in 2014 with 16.04% share, holding on last year with 10.74%, it has now slipped to fifth with just 6.16% – its lowest ranking since 2009.
  </div>
  <div class="item-container">
          Its slide is mirrored by the stories of Deutsche Bank and Barclays – powerhouses only four or five years ago – now down to 8th in Deutsche’s case and 11th in Barclays’ (outside the top 10 for the first time since 2001).
          <p>
          <div  class="item-quote">
          It’s like being able to design a stripped down drag racing car where the only goal is speed, while your rivals need to put in a dog box and baby seats
          </div>
          <p>
          But their fall has meant room for new entrants. One of the places in the top five has been taken by electronic market making outfit XTX Markets. First appearing in the rankings in 2015 at 34th, XTX has gained ground ever since; this year it has finished third overall with a 7.36% share. Its e-rival Jump hovers just outside the top 10, with 2.38%. 
          <p>
          To be fair, the rankings in this year’s survey are not strictly comparable with those of the past. The reason being that this year the methodology has been altered. Swaps less than one week in maturity no longer count towards a firm’s total volume. This has the effect of putting more emphasis on spot and forwards market share in the overall rankings, since short-dated flow is a large part of most firms’ swaps volume. 
          <p>
          It would be possible to argue at tedious length about the wisdom of re-jigging the survey this way. I personally think it makes sense since – some emerging currencies aside – ultra-short dated swaps have very little to do with a firm’s real prowess in the sharp end of FX. In any case, it makes no difference to JPMorgan’s victory, the US bank would have won under the old rules too, although it does flatter XTX.
  </div>
  <div class="item-container">
          <div  class="item-header">
          Same pattern
          </div>
          Even with that caveat, what is still clear is that all these movements in the rankings – the consolidation of the hold of JPMorgan, the rise of specialist e-market makers and the fall of intermediate-sized full-service firms – are part of the same pattern.
          <br>
          There are, and always have been, two broad categories of customer: the kind that just want a price and the kind that see FX as a package of services, often tied up with other things a bank can offer, such as loans or origination. 
          <br>
          For those customers who just want a price – as convenient, tight and reliable as possible – the new e-market makers have some inherent advantages over incumbents. 
          <br>
          No legacy systems to try to work around, just a nice clean sheet of paper. No bank firewalls or interminable committees to negotiate. No regulatory restraints on pay. It’s like being able to design a stripped down drag racing car where the only goal is speed, while your rivals need to put in a dog box and baby seats. 
          <br>
          No legacy systems to try to work around, just a nice clean sheet of paper. No bank firewalls or interminable committees to negotiate. No regulatory restraints on pay. It’s like being able to design a stripped down drag racing car where the only goal is speed, while your rivals need to put in a dog box and baby seats. 
  </div>
  <div class="item-container">
          And so, as you might expect, the e-market makers dominate the FX trading platform category, the world of ‘just give me a price’. HCTech at third and Jump Trading at number three both have very decent totals (9.61% and 7.03% respectively), but XTX wins the category with a startling 18.49%. XTX’s position is not just about volumes. In the newly instituted customer satisfaction (CSAT) survey, the firm gets stellar marks in virtually every category. 
          <br>
          What is more, it is not just in developed markets that the newcomers shine, they have also started to make a serious showing in the less developed markets. In emerging markets, XTX comes in at number three just behind such sector stalwarts as Standard Chartered and JPMorgan. 
          <br>
          This should be a worrying sign for banks that might have thought that the wrinkles and peculiarities of emerging currencies would not suit robots. But maybe, with machine learning able to see complex patterns and connections that no human trader can realistically follow, this arena is actually even more suited to the machines’ advantages than the more liquid and heavily traded G20.
  </div>`;
}

    public getRelatedLinks(word) {
      switch (word) {
        case "Euromoney":
          return [
            new RelatedLink("Euromoney was born with the wholesale...", "https://www.euromoney.com/magazine", "April 2019", "", ""),
            new RelatedLink("Banking and capital markets in Asia...", "https://www.euromoney.com/markets", "May 2019", "", ""),
            new RelatedLink("More add offshore platform for private...", "https://www.euromoney.com/news-and-opinion", "May 2019", "", "")
          ];
        case "JPMorgan":
          return [
            new RelatedLink("J.P.Morgan in the United Kingdom...", "https://www.jpmorgan.com/country/GB/en/jpmorgan", "May 2019", "", ""),
            new RelatedLink("Insights. E-Trading survey 2019...", "https://www.jpmorgan.com/country/GB/EN/insights", "April 2019", "", ""),
            new RelatedLink("Global pensions assess a changing...", "https://www.jpmorgan.com/country/GB/EN/solutions", "May 2019", "", "")
          ];
        case "in the piece I wrote for last year’s survey":
          return [
            new RelatedLink("FX Survey 2017: Results index", "https://www.jpmorgan.com/country/GB/en/jpmorgan", "May 2019", "../../assets/images/u93.png", "The top firms this year look like they haven’t moved in 18 years. How can nearly two decades of upheaval appear to have altered the rankings so little in Euromoney’s foreign exchange survey?"),
          ];
        default:
        return [
          new RelatedLink("Need more gold", "http://google.com/search?q=gold", "May 2019", "", ""),
          new RelatedLink("Some more reading", "http://google.com/search?q=reading", "April 2019", "", ""),
          new RelatedLink("Get some Money", "http://google.com/search?q=money", "March 2019", "", ""),
          new RelatedLink("Futures", "http://google.com/search?q=futures", "May 2019", "", "")
        ];

        }
    } 
  }

  export class RelatedLink {
    constructor (
      public text: string, 
      public link: string, 
      public date: string,
      public imagelink: string,
      public description: string) {}
   }