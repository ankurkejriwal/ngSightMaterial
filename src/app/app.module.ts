import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
// import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
// import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
// import { SectionHealthComponent } from './sections/section-health/section-health.component';
// import { SectionDashboardComponent } from './sections/section-dashboard/section-dashboard.component';
// import { SectionFormComponent } from './sections/section-form/section-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { ChartsModule } from 'ng2-charts';

import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import{FlexLayoutModule} from '@angular/flex-layout'
import{MatSidenavModule} from '@angular/material/sidenav'


import {appRoutes} from 'routes';
import { FooterComponent } from './footer/footer.component';
import { SectionsModule } from './sections/sections.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from '@rinminase/ng-charts';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // BarChartComponent,
    // PieChartComponent,
    // LineChartComponent,
    NavbarComponent,
    PaginationComponent,
    // SectionHealthComponent,
    // SectionDashboardComponent,
    // SectionFormComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    SectionsModule,
    HighchartsChartModule,
    ChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
