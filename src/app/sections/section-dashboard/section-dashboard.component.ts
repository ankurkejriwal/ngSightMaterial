import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

interface T {
  name: string;
  data: number[];
}

@Component({
  selector: 'app-section-dashboard',
  templateUrl: './section-dashboard.component.html',
  styleUrls: ['./section-dashboard.component.scss']
})
export class SectionDashboardComponent implements OnInit {
  bigChart:any;
  cards: any;
  pieChart: any;


  constructor(private dashboardService: DashboardService) { 
  }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    // console.log("Pie Chart imported Data")
    // console.log(this.pieChart);
  }

}
