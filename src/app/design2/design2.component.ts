import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fade } from '../shared/animations';

@Component({
  selector: 'app-design2',
  templateUrl: './design2.component.html',
  styleUrls: ['./design2.component.scss'],
  animations: fade
})
export class Design2Component implements OnInit {
  @ViewChild('firstContainer') private firstContainer: ElementRef<HTMLMainElement>;
  @ViewChild('secondContainer') private secondContainer: ElementRef<HTMLMainElement>;
  @ViewChild('thirdContainer') private thirdContainer: ElementRef<HTMLMainElement>;
  
  public imagePosition = 0;
  public imageState = 'in';
  public allImages = ['assets/images/troy2.jpg', 'assets/images/table-example-image.jpg', 'assets/images/FX_2018_top_10_liquidity_NEW-780.png', 'assets/images/FX_2018_market_share_NEW-780.png'];
  public imageUrl = '';
  public imageAnimationCounter = 0;

  constructor() { 
  }

  ngOnInit() {
    this.imagePosition = 0;
    this.imageAnimationCounter = 0;
    this.imageState = 'out';
  }

  public recordInnerScroll( percent: number ) : void {
    if(this.firstContainer.nativeElement.getBoundingClientRect().top > 0){
      if(this.imagePosition !== 0)
      {
        this.imagePosition = 0;
        this.imageAnimationCounter = 0;
        this.imageState = 'out';
      }
      return;
    }

    if(this.secondContainer.nativeElement.getBoundingClientRect().top > 0){
      if(this.imagePosition !== 1)
      {
        this.imagePosition = 1;
        this.imageAnimationCounter = 0;
        this.imageState = 'out';
      }
      return;
    }

    if(this.thirdContainer.nativeElement.getBoundingClientRect().top > 0){
      if(this.imagePosition !== 2)
      {
        this.imagePosition = 2;
        this.imageAnimationCounter = 0;
        this.imageState = 'out';
      }
      return;
    }

    if(this.imagePosition !== 3)
    {
      this.imagePosition = 3;
      this.imageAnimationCounter = 0;
      this.imageState = 'out';
    }
  }

  onDone($event) {
    if(this.imageAnimationCounter < 1){
      this.imageState = 'in';
      this.imageAnimationCounter++;
      this.imageUrl = this.allImages[this.imagePosition];
    }
  }
}
