import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Dispenser} from '../model/dispenser';

@Injectable({
  providedIn: 'root'
})
export class DispenserService extends BaseService<Dispenser> {

  constructor() {
    super();
    this.resourceEndpoint = '/dispenser';
  }
}
