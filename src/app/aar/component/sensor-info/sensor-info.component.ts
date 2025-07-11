import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SensorService } from '../../service/sensor.service';
import { Sensor } from '../../model/sensor';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { PondService } from '../../../oam/service/pond.service';
import { Pond } from '../../../oam/model/pond.entity';

@Component({
  selector: 'app-sensor-info',
  templateUrl: './sensor-info.component.html',
  styleUrl: './sensor-info.component.css',
  imports: [
    NgIf,
    TranslatePipe
  ],
  providers: [SensorService, PondService]
})
export class SensorInfoComponent implements OnInit, OnChanges {
  @Input() sensorId: number | undefined;
  @Input() sensor: Sensor | undefined;

  pondName: string = '';

  constructor(
    private sensorService: SensorService,
    private pondService: PondService
  ) {}

  ngOnInit(): void {
    if (!this.sensor) {
      this.loadSensor();
    } else {
      this.loadPondName();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sensorId'] && !changes['sensorId'].firstChange) {
      this.loadSensor();
    }

    if (changes['sensor'] && !changes['sensor'].firstChange) {
      this.loadPondName();
    }
  }

  private loadSensor(): void {
    if (this.sensorId !== undefined) {
      this.sensorService.getAll().subscribe(sensors => {
        this.sensor = sensors.find(s => s.id == this.sensorId);
        if (this.sensor) {
          this.loadPondName();
        }
      });
    } else {
      this.sensor = undefined;
    }
  }

  private loadPondName(): void {
    if (this.sensor && this.sensor.pondId) {
      this.pondService.getAll().subscribe(ponds => {
        const pond = ponds.find(p => p.id === this.sensor?.pondId);
        this.pondName = pond ? pond.name : 'Estanque desconocido';
      });
    }
  }
}
