import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';
import { UserData } from './data/users';
import { ElectricityData } from './data/electricity';
import { SmartTableData } from './data/smart-table';
 


import { TrafficListData } from './data/traffic-list';
import { EarningData } from './data/earning';

import { TrafficBarData } from './data/traffic-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';

import { SolarData } from './data/solar';
import { TrafficChartData } from './data/traffic-chart';
import { StatsBarData } from './data/stats-bar';
 
import { StatsProgressBarData } from './data/stats-progress-bar';
 


import { UserService } from './mock/users.service';
import { ElectricityService } from './mock/electricity.service';
import { SmartTableService } from './mock/smart-table.service';
 


import { TrafficListService } from './mock/traffic-list.service';
import { EarningService } from './mock/earning.service';

import { TrafficBarService } from './mock/traffic-bar.service';
 


import { TrafficChartService } from './mock/traffic-chart.service';
import { StatsBarService } from './mock/stats-bar.service';
 
import { StatsProgressBarService } from './mock/stats-progress-bar.service';
 

import { MockDataModule } from './mock/mock-data.module';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: SmartTableData, useClass: SmartTableService },
  
  
  
  { provide: TrafficListData, useClass: TrafficListService },
  { provide: EarningData, useClass: EarningService },
  
  { provide: TrafficBarData, useClass: TrafficBarService },
 
 
  
  { provide: TrafficChartData, useClass: TrafficChartService },
  { provide: StatsBarData, useClass: StatsBarService },
  
  { provide: StatsProgressBarData, useClass: StatsProgressBarService },
  
  
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
