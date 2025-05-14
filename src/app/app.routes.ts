import { Routes } from '@angular/router';
import {PondDetailViewComponent} from './feeding/pages/pond-detail-view/pond-detail-view.component';
import {PondsViewComponent} from './feeding/pages/ponds-view/ponds-view.component';

export const routes: Routes = [
  { path: 'ponds', component: PondsViewComponent },
  { path: 'ponds/id', component: PondDetailViewComponent },
  { path: '', redirectTo: 'ponds', pathMatch: 'full'},
  { path: '**', component: PondsViewComponent}
];
