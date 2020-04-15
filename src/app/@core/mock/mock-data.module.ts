import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { SmartTableService } from './smart-table.service';
 


import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { TodaysPredictionService } from './TodaysPrediction.service';

import { TrafficBarService } from './traffic-bar.service';
 


import { TrafficChartService } from './traffic-chart.service';
import { StatsBarService } from './stats-bar.service';
 
import { StatsProgressBarService } from './stats-progress-bar.service';
 


const SERVICES = [
  UserService,
  ElectricityService,
  SmartTableService,
  
  
 
  TrafficListService,
  PeriodsService,
  TodaysPredictionService,
 
  TrafficBarService,
  
 
  
  TrafficChartService,
  StatsBarService,
  
  StatsProgressBarService,
  
  
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
