import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../service/sensor.service';
import { DispenserService } from '../../service/dispenser.service';
import { Sensor } from '../../model/sensor';
import { Dispenser } from '../../model/dispenser';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './device-page.component.css'
})
export class DevicePageComponent implements OnInit {
  sensors: Sensor[] = [];
  dispensers: Dispenser[] = [];

  constructor(
    private sensorService: SensorService,
    private dispenserService: DispenserService
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
}
