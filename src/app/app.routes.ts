import { Routes } from '@angular/router';
import {authenticationGuard} from "./iam/services/authentication.guard";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import { CommunicationComponent } from './communication/communication.component';
import { CreateAlertComponent } from './communication/create-alert/create-alert.component';
export const routes: Routes = [
  { path: '', redirectTo: 'communication', pathMatch: 'full' },
  { path: 'communication', component: CommunicationComponent },
  { path: 'create-alert', component: CreateAlertComponent }
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  ];

