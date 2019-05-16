import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-design2',
  templateUrl: './design2.component.html',
  styleUrls: ['./design2.component.scss']
})
export class Design2Component implements OnInit {
  @ViewChild('firstContainer') private firstContainer: ElementRef<HTMLMainElement>;
  @ViewChild('secondContainer') private secondContainer: ElementRef<HTMLMainElement>;
  @ViewChild('thirdContainer') private thirdContainer: ElementRef<HTMLMainElement>;
  
  public imageUrl = '';

  constructor() { 
  }

  ngOnInit() {
    this.imageUrl = 'assets/images/troy2.jpg';
  }

  public recordInnerScroll( percent: number ) : void {
    if(this.firstContainer.nativeElement.getBoundingClientRect().top > 0){
      this.imageUrl = 'assets/images/troy2.jpg';
      return;
    }

    if(this.secondContainer.nativeElement.getBoundingClientRect().top > 0){
      this.imageUrl = 'assets/images/table-example-image.jpg';
      return;
    }

    if(this.thirdContainer.nativeElement.getBoundingClientRect().top > 0){
      this.imageUrl = 'assets/images/FX_2018_top_10_liquidity_NEW-780.png';
      return;
    }

    this.imageUrl = 'assets/images/FX_2018_market_share_NEW-780.png';
  }
}
