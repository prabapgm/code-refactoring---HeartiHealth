import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { Dashboard_graphComponent } from './Dashboard_graph/Dashboard_graph.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HealthPredictorComponent } from './health-predictor/health-predictor.component';
import { HealthPredictorResultComponent } from './health-predictor-result/health-predictor-result.component';
import{ ProfitCardResolverService } from './../HeartAttacksCured_Weekly-resolver.service';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: Dashboard_graphComponent,
      resolve: { dashboard : ProfitCardResolverService}
    },
    
    {
      path: 'health-predictor',
      component: HealthPredictorComponent,
    },
    {
      path: 'health-predictor-result',
      component: HealthPredictorResultComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
   
     
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProfitCardResolverService]
})
export class PagesRoutingModule {
}
