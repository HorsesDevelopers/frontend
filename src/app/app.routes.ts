import { Routes } from '@angular/router';
import {authenticationGuard} from "./iam/services/authentication.guard";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import { CommunicationComponent } from './communication/pages/communication/communication.component';
import { CreateAlertComponent } from './communication/component/create-alert/create-alert.component';
import {PondDetailViewComponent} from './feeding/pages/pond-detail-view/pond-detail-view.component';
import {PondsViewComponent} from './feeding/pages/ponds-view/ponds-view.component';
import {ScheduleViewComponent} from './schedule/pages/schedule-view/schedule-view.component';
import {CreateScheduleComponent} from './schedule/components/create-schedule/create-schedule.component';
import {CreateSensorComponent} from './feeding/pages/create-sensor/create-sensor.component';
import {CreateFoodComponent} from './feeding/pages/create-food/create-food.component';
import {SchedulePendingComponent} from './schedule/components/schedule-pending/schedule-pending.component';
import {DevicePageComponent} from './device/pages/device-page/device-page.component';
import {AddDeviceComponent} from './device/pages/add-device/add-device.component';
import {HomeComponent} from './iam/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import { CreatePondComponent } from './feeding/pages/create-pond/create-pond.component';


export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'communication', component: CommunicationComponent },
  { path: 'home', component: HomeComponent},
  { path: 'schedule', component: ScheduleViewComponent },
  { path: 'schedule/new', component: CreateScheduleComponent, canActivate: [authenticationGuard] },
  { path: 'schedule/pending', component: SchedulePendingComponent, canActivate: [authenticationGuard] },
  { path: 'create-alert', component: CreateAlertComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'devices', component: DevicePageComponent},
  { path: 'add-devices', component: AddDeviceComponent},
  { path: 'ponds', component: PondsViewComponent },
  { path: 'pond-detail/:id', component: PondDetailViewComponent },
  { path: 'sensors/create', component: CreateSensorComponent },
  { path: 'foods/create', component: CreateFoodComponent },
  { path: 'create-pond', component: CreatePondComponent },
  { path: '**', component: PageNotFoundComponent},

];
