import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-design2',
  templateUrl: './design2.component.html',
  styleUrls: ['./design2.component.scss']
})
export class Design2Component implements OnInit {
  @ViewChild('firstContainer') private firstContainer: ElementRef<HTMLMainElement>;
  @ViewChild('mainContainer') private mainContainer: ElementRef<HTMLMainElement>;
  
  public hideFirst = false;
  public hideSecond = true;

  constructor() { 
  }

  ngOnInit() {
  }

  public recordInnerScroll( percent: number ) : void {
    let visiblePart = this.firstContainer.nativeElement.clientHeight - this.mainContainer.nativeElement.scrollTop;

    if(visiblePart > 0.0) {
      this.hideFirst = false;
      this.hideSecond = true;
    }else{
      this.hideFirst = true;
      this.hideSecond = false;
    }
  }
}
