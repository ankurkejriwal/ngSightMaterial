import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
 
  @Input() data = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions : Highcharts.Options= {};

  
  
  constructor() { }

  ngOnInit(): void {

      this.chartOptions= {
        series: [{
          name: 'Brands',
          data: this.data,
          type: 'pie'
        }],
        chart:{
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'RANDOM DATA'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        exporting: {
          enabled: true
        },
        credits: {
          enabled: false
        },
        
      };
    HC_exporting(Highcharts);
    console.log(this.data);
    
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    
  }

}
