import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() title: string;

  constructor() { 
   //debugger;
  }

  chart: Chart;

  ngOnInit() {

 // debugger;

    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        line: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
      name: 'JPMorgan',
      type: 'line',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
      name: 'Goldman Sachs',
      type: 'line',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
      name: 'UPS',
      type: 'line',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
      name: 'HSBC',
      type: 'line',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
      name: 'Citi',
      type: 'line',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }]
    });

  }

  public updateSeries(series : any[])
  {
    debugger;
    this.chart.removeSeries(0);
    this.chart.addSeries({
      name: 'JPMorganX',
      type: 'line',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },true, true);
  }

  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }

}
