import { Component, OnInit, ViewChild,ElementRef,ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ElementScrollPercentage } from "../services/element-scroll-percentage.service";
import {EsriService} from "../services/esri.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-design6',
  templateUrl: './design6.component.html',
  styleUrls: ['./design6.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[DataService, EsriService]
})
export class Design6Component implements OnInit {

  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private mapInitialisedRef: Subscription = null;
  private locateCompleteRef: Subscription = null;

  public demoRange: number[];
  public innerScroll: number;
  public pageScroll: number;

  public cityLabel ="New York";
  public articleContent: string;

  private elementScrollPercentage: ElementScrollPercentage; 

  private locations: any = [
    [100.523186,13.736717],
    [-0.118092,51.509865, 'London'],
    [151.209900,-33.865143, 'Sydney'] //sydney
    ,[55.296249,25.276987, ''],
    [134.582520,7.514980, ''],
   ];
  
    private currentIndex =0;
    private isRunning = false;

  // I initialize the app-component.
  constructor(private dataService : DataService, 
    elementScrollPercentage: ElementScrollPercentage, private esriService : EsriService ) {

      this.elementScrollPercentage = elementScrollPercentage;

      this.articleContent = dataService.articleChartData().content
      .replace("New York", "<span class='highlight'>New York</span>")
      .replace("London", "<span class='highlight'>London</span>")
      .replace("Sydney", "<span class='highlight'>Sydney</span>");

      //--
      this.demoRange = [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
      this.innerScroll = 0;
      this.pageScroll = 0;
  }

  public ngOnInit() : void {

    this.esriService.create3DMap(this.mapViewEl.nativeElement);

    this.esriService.mapInitialised$.subscribe(()=>{ 
      debugger;
    });

    this.esriService.locateComplete$.subscribe(()=>{ 
      debugger;
      this.isRunning = false;
    });

    //--

    this.elementScrollPercentage
        .getScrollAsStream() // Defaults to Document if no Element supplied.
        .subscribe(
            ( percent: number ) : void => {

                this.pageScroll = percent;

            }
        );
}

public recordInnerScroll( percent: number ) : void {
    this.innerScroll = percent;

    if (!this.isRunning)
    {
      this.isRunning = true;
      this.currentIndex++;

          this.esriService.goTo(
        this.locations[this.currentIndex][1],
        this.locations[this.currentIndex][0]);

        this.cityLabel = this.locations[this.currentIndex][2];

        console.log( this.currentIndex);

        if (this.currentIndex == this.locations.length -1)
          this.currentIndex =0;
      //else
       // this.currentIndex++;
    }

}


}
