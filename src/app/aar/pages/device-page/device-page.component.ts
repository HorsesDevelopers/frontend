import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorService } from '../../service/sensor.service';
import { DispenserService } from '../../service/dispenser.service';
import { Sensor } from '../../model/sensor';
import { Dispenser } from '../../model/dispenser';
import { NgForOf } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-aar-page',
  templateUrl: './device-page.component.html',
  imports: [
    NgForOf,
    TranslatePipe
  ],
  styleUrl: './device-page.component.css'
})
export class DevicePageComponent implements OnInit {
  sensors: Sensor[] = [];
  dispensers: Dispenser[] = [];
  selectedSensorId?: number;

  constructor(
    private sensorService: SensorService,
    private dispenserService: DispenserService,
    private router: Router // Importación del Router
  ) {}

  ngOnInit(): void {
    this.loadSensors();
    this.loadDispensers();
  }

  private loadSensors(): void {
    this.sensorService.getAll().subscribe((data: Sensor[]) => {
      this.sensors = data;
    });
  }

  private loadDispensers(): void {
    this.dispenserService.getAll().subscribe((data: Dispenser[]) => {
      this.dispensers = data;
    });
  }

  navigateToAddDevice(): void {
    this.router.navigate(['/add-devices']);
  }
}
