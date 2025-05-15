import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../../device/service/sensor.service';
import { Sensor } from '../../../device/model/sensor';
import {SensorInfoComponent} from '../../../device/component/sensor-info/sensor-info.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SensorInfoComponent,
    NgForOf
  ],
  providers: [SensorService]
})
export class HomeComponent implements OnInit {
  sensors: Sensor[] = [];
  selectedSensorId?: number;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.sensorService.getAll().subscribe(sensors => {
      this.sensors = sensors;
    });
  }

  selectSensor(id: number) {
    this.selectedSensorId = id;
    console.log(this.selectedSensorId);
  }
}
