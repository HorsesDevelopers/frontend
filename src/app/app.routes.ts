import { Routes } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { CreateAlertComponent } from './communication/create-alert/create-alert.component';

export const routes: Routes = [
  { path: '', redirectTo: 'communication', pathMatch: 'full' },
  { path: 'communication', component: CommunicationComponent },
  { path: 'create-alert', component: CreateAlertComponent }
];
