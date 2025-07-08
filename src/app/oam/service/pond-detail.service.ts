import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {PondDetail} from '../interfaces/pondDetail';

@Injectable({
  providedIn: 'root'
})
export class PondDetailService extends BaseService<PondDetail>{

  constructor() {
    super();
    this.resourceEndpoint = '/ponds';
  }
}
