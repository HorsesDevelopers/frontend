import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pond } from '../../model/pond.entity';
import { PondService } from '../../service/pond.service';
import { Sensor } from '../../interfaces/Sensor';
import { SensorService } from '../../service/sensor.service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatFabButton } from '@angular/material/button';
import { NgClass, NgForOf, NgIf } from '@angular/common';

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
  pondDetailData?: Pond;
  sensorsData: Sensor[] = [];
  pondId: number = 0;

  constructor(
    private pondService: PondService,
    private sensorService: SensorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.pondId = +idParam;
      this.getPondDetail();
      this.getSensors();
    }
  }

  getPondDetail() {
    this.pondService.getById(this.pondId.toString()).subscribe((response: Pond) => {
      this.pondDetailData = response;
    });
  }

  getSensors() {
    this.sensorService.getAll().subscribe((response: Sensor[]) => {
      this.sensorsData = response.filter(sensor => sensor.pond_id === this.pondId);
    });
  }

  navigateToCreateFish() {
    this.router.navigate(['/fishes/create'], { queryParams: { pondId: this.pondId } });
  }

  navigateToCreateSensor() {
    this.router.navigate(['/sensors/create']);
  }

  navigateToCreateFood() {
    this.router.navigate(['/foods/create', { pondId: this.pondId }]);
  }
}
