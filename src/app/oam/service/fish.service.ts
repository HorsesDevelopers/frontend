import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Fish} from '../model/pond.entity';

@Injectable({
  providedIn: 'root'
})
export class FishService extends BaseService<Fish> {
  constructor() {
    super();
    this.resourceEndpoint = '/fishes';
  }
}
