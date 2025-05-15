import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SensorService } from '../../service/sensor.service';
import { Sensor } from '../../model/sensor';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sensor-info',
  templateUrl: './sensor-info.component.html',
  styleUrl: './sensor-info.component.css',
  imports: [
    NgIf
  ],
  providers: [SensorService]
})
export class SensorInfoComponent implements OnInit, OnChanges {
  @Input() sensorId: number | undefined;
  sensor: Sensor | undefined;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.loadSensor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sensorId'] && !changes['sensorId'].firstChange) {
      this.loadSensor();
    }
  }

  private loadSensor(): void {
    if (this.sensorId !== undefined) {
      this.sensorService.getAll().subscribe(sensors => {
        this.sensor = sensors.find(s => s.id == this.sensorId);
      });
    } else {
      this.sensor = undefined;
    }
  }
}
