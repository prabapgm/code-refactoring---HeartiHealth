import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { Dashboard_graphComponent } from './Dashboard_graph.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsBarAnimationChartComponent } from './HeartAttacksCured_Weekly/stats-bar-animation-chart.component';
import { HeartAttacksCured_WeeklyComponent } from './HeartAttacksCured_Weekly/HeartAttacksCured_Weekly.component';
import { TotalPrediction_CalenderRevealCardComponent } from './TotalPrediction_Calender-card/TotalPrediction_Calender-reveal-card.component';
import { TotalPrediction_CalenderBarComponent } from './TotalPrediction_Calender-card/front-side/TotalPrediction_Calender-bar/TotalPrediction_Calender-bar.component';
import { TotalPrediction_CalenderFrontCardComponent } from './TotalPrediction_Calender-card/front-side/TotalPrediction_Calender-front-card.component';
import { TotalPrediction_CalenderHeaderComponent } from './TotalPrediction_Calender-card/TotalPrediction_Calender-header/TotalPrediction_Calender-header.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TodaysPredictionComponent } from './TodaysPrediction/TodaysPrediction.component';
import { TodaysPredictionFrontComponent } from './TodaysPrediction/TodaysPrediction-front.component';
import { TodaysPredictionLiveUpdateChartComponent } from './TodaysPrediction/TodaysPrediction-live-update-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    Dashboard_graphComponent,
    HeartAttacksCured_WeeklyComponent,    
    StatsBarAnimationChartComponent,
    HeartAttacksCured_WeeklyComponent,    
    TotalPrediction_CalenderRevealCardComponent,
    TotalPrediction_CalenderFrontCardComponent,    
    TotalPrediction_CalenderBarComponent,
    TotalPrediction_CalenderHeaderComponent, 
    TodaysPredictionComponent,
    TodaysPredictionFrontComponent,    
    TodaysPredictionLiveUpdateChartComponent,
  ],
  providers: [    
  ],
})
export class Dashboard_graphModule { }
