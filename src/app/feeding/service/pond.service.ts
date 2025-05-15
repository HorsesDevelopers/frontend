import { Injectable } from '@angular/core';
import { Pond } from '../model/pond.entity';
import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class PondService extends BaseService<Pond> {
  constructor() {
    super();
    this.resourceEndpoint = '/pond';
  }
}
