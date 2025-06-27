import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PondDetail } from '../../interfaces/pondDetail';
import { PondDetailService } from '../../service/pond-detail.service';
import { Sensor } from '../../interfaces/Sensor';
import { SensorService } from '../../service/sensor.service';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatFabButton} from '@angular/material/button';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-pond-detail-view',
  templateUrl: './pond-detail-view.component.html',
  imports: [
    MatTab,
    MatTabGroup,
    MatFabButton,
    NgForOf,
    NgIf,
    NgClass
  ],
  styleUrl: './pond-detail-view.component.css'
})
export class PondDetailViewComponent implements OnInit {
  pondDetailData?: PondDetail;
  sensorsData: Sensor[] = [];
  fishTypes: string[] = [];
  pondId: number = 0;

  constructor(
    private pondDetailService: PondDetailService,
    private sensorService: SensorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.pondId = +idParam;
      this.getPondDetail();
      this.getSensors();
    }
  }

  getPondDetail() {
    this.pondDetailService.getById(this.pondId).subscribe((response: PondDetail) => {
      this.pondDetailData = response;
      this.fishTypes = Object.keys(response.fishPerTypeQuantity || {});
    });
  }

  getSensors() {
    this.sensorService.getAll().subscribe((response: Sensor[]) => {
      this.sensorsData = response.filter(sensor => sensor.pond_id === this.pondId);
    });
  }

  navigateToCreateSensor() {
    this.router.navigate(['/sensors/create']);
  }

  navigateToCreateFood() {
    this.router.navigate(['/foods/create', { pondId: this.pondId }]);
  }
}
