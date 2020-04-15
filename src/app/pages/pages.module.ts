import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbButtonModule, NbInputModule, NbRadioModule,
  NbDialogModule, 
  NbTooltipModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { Dashboard_graphModule } from './Dashboard_graph/Dashboard_graph.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HealthPredictorComponent } from './health-predictor/health-predictor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HealthPredictorResultComponent } from './health-predictor-result/health-predictor-result.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    
    Dashboard_graphModule,
    MiscellaneousModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
  ],
  declarations: [
    PagesComponent,
    HealthPredictorComponent,
    HealthPredictorResultComponent,
  ],
})
export class PagesModule {
}
