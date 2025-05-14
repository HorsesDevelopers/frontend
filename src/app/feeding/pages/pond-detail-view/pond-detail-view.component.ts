import { Component } from '@angular/core';
import {PondDetail} from '../../interfaces/pondDetail';

@Component({
  selector: 'app-pond-detail-view',
  imports: [],
  templateUrl: './pond-detail-view.component.html',
  styleUrl: './pond-detail-view.component.css'
})
export class PondDetailViewComponent {
  protected pondDetailData!: PondDetail;
}
