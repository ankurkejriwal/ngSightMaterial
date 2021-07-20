import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
    exporting:{
      enabled : false,
    }
  };
  
  
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
