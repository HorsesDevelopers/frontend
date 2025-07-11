import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorService } from '../../../aar/service/sensor.service';
import { Sensor } from '../../../aar/model/sensor';
import { SensorInfoComponent } from '../../../aar/component/sensor-info/sensor-info.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ListScheduleComponent } from '../../../sdap/components/list-schedule/list-schedule.component';
import { TranslatePipe } from '@ngx-translate/core';
import { WebSocketService } from '../../../shared/services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SensorInfoComponent,
    NgForOf,
    NgIf,
    NgClass,
    ListScheduleComponent,
    TranslatePipe
  ],
  providers: [SensorService]
})
export class HomeComponent implements OnInit, OnDestroy {
  sensors: Sensor[] = [];
  selectedSensorId: number = 1;
  websocketStatus: string = 'Desconectado';
  private subscriptions: Subscription[] = [];

  constructor(
    private sensorService: SensorService,
    private router: Router,
    public websocketService: WebSocketService
  ) {}

  ngOnInit(): void {

    this.loadSensors();


    this.connectWebSocket();
  }

  ngOnDestroy(): void {

    this.websocketService.disconnect();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadSensors(): void {
    this.sensorService.getAll().subscribe(sensors => {
      this.sensors = sensors;
    });
  }

  connectWebSocket(): void {
    const connectSub = this.websocketService.connect().subscribe(success => {
      this.websocketStatus = success ? 'Conectado' : 'Error de conexión';

      if (success) {

        const sensorUpdateSub = this.websocketService.getSensorUpdates().subscribe(data => {
          console.log('Datos recibidos del WebSocket:', data);
          this.updateSensorData(data);
        });

        this.subscriptions.push(sensorUpdateSub);
      }
    });

    this.subscriptions.push(connectSub);
  }

  updateSensorData(data: any): void {
    if (data && data.pondId) {
      const sensorId = parseInt(data.pondId);
      const sensorIndex = this.sensors.findIndex(s => s.id === sensorId);

      if (sensorIndex >= 0) {
        const updatedSensor = {...this.sensors[sensorIndex]};


        switch(data.sensorType) {
          case 'Temp':
            updatedSensor.temperature = data.value;
            break;
          case 'oxygen':
            updatedSensor.oxygen = data.value;
            break;
          case 'nytrogen':
            updatedSensor.nytrogen = data.value;
            break;
          case 'pH':
            updatedSensor.nytrogen = data.value;
            break;
          case 'Turbidity':
            updatedSensor.turbidity = data.value;
            break;
        }


        this.sensors = [
          ...this.sensors.slice(0, sensorIndex),
          updatedSensor,
          ...this.sensors.slice(sensorIndex + 1)
        ];
      }
    }
  }

  selectSensor(id: number) {
    this.selectedSensorId = id;
    console.log(this.selectedSensorId);
  }


  getSelectedSensor(): Sensor | undefined {
    return this.sensors.find(sensor => sensor.id === this.selectedSensorId);
  }

  goToCreateSchedule() {
    this.router.navigate(['/schedule/new']);
  }

  toggleWebSocketConnection() {
    if (this.websocketService.isConnected()) {
      this.websocketService.disconnect();
      this.websocketStatus = 'Desconectado';
    } else {
      this.connectWebSocket();
    }
  }
}
