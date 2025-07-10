import { Injectable } from '@angular/core';
import {Alert} from '../interfaces/Alert.interface';
import {BaseService} from '../../shared/services/base.service';


@Injectable({
  providedIn: 'root'
})
export class AlertService extends BaseService<Alert> {

  constructor() {
    super();
    this.resourceEndpoint = '/notifications';
  }
}

