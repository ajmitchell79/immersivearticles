import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';


@Component({
  selector: 'app-design4',
  templateUrl: './design4.component.html',
  styleUrls: ['./design4.component.scss']
})
export class Design4Component implements OnInit {

  constructor() { }

  chart: Chart;
  ngOnInit() {

    var year = 2014;
    var cTitle = 
    this.chart = new Chart({
      chart: {
        type: 'line',
        events: {
          click: function (e) {
              // find the clicked values and the series
              if (year < 2019){
              this.series[0].addPoint(Math.floor(Math.random() * 10));
              this.series[1].addPoint(Math.floor(Math.random() * 10));
              this.series[2].addPoint(Math.floor(Math.random() * 10));
              this.series[3].addPoint(Math.floor(Math.random() * 10));
              year += 1;
              this.title.update({text:"Ranking change of top 10 liquidity providers over five years: " + year.toString()});
              }
          }
        }
      },
      title: {
        text: 'Ranking change of top 10 liquidity providers over five years: ' + year.toString()       
      },
      subtitle: {
        text: 'Click on the chart to load the stats'
      },
      yAxis: {
        title: {
            text: 'Rank'
        },
        allowDecimals: false,
        reversed: true,
        labels: {
          step: 1
        },
        min: 1
      },
      xAxis: {
        allowDecimals: false,
        min: 2014
      },
      credits: {
        enabled: false
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2014
        }
      },
      series: [{name: 'JP Morgan', type: 'line', data: [6]},
      {name: 'UBS', type: 'line', data: [4]},
      {name: 'Goldman Sachs', type: 'line', data: [10]},
      {name: 'HSBC', type: 'line', data: [2]}
      ]
    });

    
  }

}
