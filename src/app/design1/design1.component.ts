// Import the core angular services.
import { Component, ViewChild } from "@angular/core";
import { OnInit } from "@angular/core";
import { DataService } from '../services/data.service';
import { ElementScrollPercentage } from "../services/element-scroll-percentage.service";
import {ChartComponent} from '../shared/chart/chart.component';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss'],
  providers:[DataService]
})
export class Design1Component implements OnInit {

  @ViewChild('chart1', { static: true }) chart1 : ChartComponent;
  @ViewChild('chart2', { static: true }) chart2 : ChartComponent;

  public demoRange: number[];
  public innerScroll: number;
  public pageScroll: number;

  private elementScrollPercentage: ElementScrollPercentage;

  // I initialize the app-component.
  constructor(public dataService : DataService, elementScrollPercentage: ElementScrollPercentage ) {

      this.elementScrollPercentage = elementScrollPercentage;

      //--
      this.demoRange = [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
      this.innerScroll = 0;
      this.pageScroll = 0;
  }

  public ngOnInit() : void {

      this.elementScrollPercentage
          .getScrollAsStream() // Defaults to Document if no Element supplied.
          .subscribe(
              ( percent: number ) : void => {

                  this.pageScroll = percent;

              }
          )
      ;

  }

  public recordInnerScroll( percent: number ) : void {
      this.innerScroll = percent;
      //console.log(percent);
      this.updateSeries();

  }

  public updateSeries()
  {
    this.chart1.updateSeries(this.randomSeries());
    this.chart2.updateSeries(this.randomSeries());
  }


  private randomSeries(): number[]
  {   
    let result = [];

   // for(let i=0;i<5; i++)
   // {
      result.push([
        Math.floor(Math.random() * 5000),
        Math.floor(Math.random() * 5000),
       Math.floor(Math.random() * 5000),
        Math.floor(Math.random() * 5000),
        Math.floor(Math.random() * 5000),
       //Math.floor(Math.random() * 5000),
      //  Math.floor(Math.random() * 5000),
     //   Math.floor(Math.random() * 5000)
    ]
      )
   // }

    return result;

   
  }

  

}
