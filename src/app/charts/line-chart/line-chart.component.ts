import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  data = [1, 2, 3, 4];

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
