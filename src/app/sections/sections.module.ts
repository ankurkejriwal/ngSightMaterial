import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionHealthComponent } from './section-health/section-health.component';
import { SectionDashboardComponent } from './section-dashboard/section-dashboard.component';
import { SectionFormComponent } from './section-form/section-form.component';

import {MatDividerModule} from '@angular/material/divider'
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import {LineChartComponent} from '../charts/line-chart/line-chart.component'
import { HighchartsChartModule } from 'highcharts-angular';

import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { CardComponent } from '../card/card.component';
import { DashboardService } from './dashboard.service';



@NgModule({
  declarations: [
    SectionHealthComponent,
    SectionDashboardComponent,
    SectionFormComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    CardComponent,

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    HighchartsChartModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [
    DashboardService,
  ]
})
export class SectionsModule { }
