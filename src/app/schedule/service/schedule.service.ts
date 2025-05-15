import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Schedule} from '../interfaces/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseService<Schedule> {

  constructor() {
    super();
    this.resourceEndpoint = '/schedules';
  }
}
