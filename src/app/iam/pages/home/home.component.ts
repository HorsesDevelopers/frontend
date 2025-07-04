import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../../device/service/sensor.service';
import { Sensor } from '../../../device/model/sensor';
import {SensorInfoComponent} from '../../../device/component/sensor-info/sensor-info.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {ListScheduleComponent} from '../../../schedule/components/list-schedule/list-schedule.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SensorInfoComponent,
    NgForOf,
    NgIf,
    NgClass,
    ListScheduleComponent
  ],
  providers: [SensorService]
})
export class HomeComponent implements OnInit {
  sensors: Sensor[] = [];
  selectedSensorId: number = 1;

  constructor(
    private sensorService: SensorService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.sensorService.getAll().subscribe(sensors => {
      this.sensors = sensors;
    });
  }

  selectSensor(id: number) {
    this.selectedSensorId = id;
    console.log(this.selectedSensorId);
  }
  goToCreateSchedule() {
    this.router.navigate(['/schedule/new']);
  }
}
