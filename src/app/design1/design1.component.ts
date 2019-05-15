import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss']
})
export class Design1Component implements OnInit {

  constructor() { }

  chart: Chart;

  ngOnInit() {

    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{name: 'Line 1', type: 'line', data: [1, 2, 3]}
      ]
    });

  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
