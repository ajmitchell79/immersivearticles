import { Component, OnInit } from '@angular/core';
import { ElementScrollPercentage } from "../services/element-scroll-percentage.service";

@Component({
  selector: 'app-design2',
  templateUrl: './design2.component.html',
  styleUrls: ['./design2.component.scss']
})
export class Design2Component implements OnInit {
  public hideFirst = false;
  public hideSecond = true;
  private elementScrollPercentage: ElementScrollPercentage;

  constructor(elementScrollPercentage: ElementScrollPercentage ) { 
    this.elementScrollPercentage = elementScrollPercentage;
  }

  ngOnInit() {
    this.elementScrollPercentage
    .getScrollAsStream() // Defaults to Document if no Element supplied.
    .subscribe(
        ( percent: number ) : void => {
          console.log('page: ' + percent);
        }
    );
  }

  public recordInnerScroll( percent: number ) : void {
    if(percent >= 0.0 && percent <= 50.0) {
      this.hideFirst = false;
      this.hideSecond = true;
    }else{
      this.hideFirst = true;
      this.hideSecond = false;
    }

    console.log('first: ' + percent);
  }
}
