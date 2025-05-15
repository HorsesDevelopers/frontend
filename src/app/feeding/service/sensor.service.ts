import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Sensor} from '../interfaces/Sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService extends BaseService<Sensor>{

  constructor() {
    super();
    this.resourceEndpoint = '/sensors';
  }
}
