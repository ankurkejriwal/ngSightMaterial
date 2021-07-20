import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      name : 'Year 1800',
      data: [107, 31, 635, 203, 2],
      type: 'bar'
    },{
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6],
      type: 'bar'
    },{
      name: 'Year 2016',
      data: [1216, 1001, 4436, 738, 40],
      type: 'bar'
    },{
      name: 'Year 2000',
      data: [814, 841, 3714, 727, 31],
      type: 'bar'
    },],
    title: {
      text: 'Historic World Population by Region'
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    title: {
        text: null
    }},
yAxis: {
    min: 0,
    title: {
        text: 'Population (millions)',
        align: 'high'
    },
    labels: {
        overflow: 'justify'
    }
},
tooltip: {
    valueSuffix: ' millions'
},
plotOptions: {
    bar: {
        dataLabels: {
            enabled: true
        }
    }
},
credits: {
    enabled: false
},
exporting:{
  enabled : true,
}

};

  constructor() { }

  ngOnInit(): void {
  }

}
