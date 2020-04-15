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
import { ProfitCardComponent } from './profit-card/profit-card.component';

import { ChartModule } from 'angular2-chartjs';

import { StatsBarAnimationChartComponent } from './profit-card/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/stats-card-front.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';

  
 
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
    StatsCardFrontComponent,
    
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
     
   
    TrafficRevealCardComponent,

    TrafficFrontCardComponent,
    
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    
    
    
     
    TodaysPredictionComponent,
    TodaysPredictionFrontComponent,
    
    TodaysPredictionLiveUpdateChartComponent,
  ],
  providers: [
    
  ],
})
export class Dashboard_graphModule { }
