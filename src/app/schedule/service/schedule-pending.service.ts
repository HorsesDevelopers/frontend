import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {PendingSchedule} from '../interfaces/pending-schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class SchedulePendingService extends BaseService<PendingSchedule> {

  constructor() {
    super();
    this.resourceEndpoint = '/pendings';
  }

}
