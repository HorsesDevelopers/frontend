import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {SensorService} from '../../service/sensor.service';
import {PondDetailService} from '../../service/pond-detail.service';
import {PondDetail} from '../../interfaces/pondDetail';
import {Sensor} from '../../interfaces/Sensor';


@Component({
  selector: 'app-create-sensor',
  imports: [
    FormsModule
  ],
  templateUrl: './create-sensor.component.html',
  styleUrl: './create-sensor.component.css'
})
export class CreateSensorComponent implements OnInit {
  private router = inject(Router);
  private sensorService = inject(SensorService);
  private pondService = inject(PondDetailService);

  ponds: PondDetail[] = [];
  newSensor: Sensor = {
    id: 0,
    status: 'Connected',
    oxygenLevel: 0,
    sensorType: '',
    temperatureLevel: 0,
    last_update: ''
  };

  ngOnInit() {
    this.loadPonds();
  }

  loadPonds() {
    this.pondService.getAll().subscribe(ponds => {
      this.ponds = ponds;
    });
  }

  createSensor() {
    if (!this.newSensor.id) {
      alert('Please select a pond');
      return;
    }

    this.sensorService.create(this.newSensor).subscribe(
      response => {
        console.log('Sensor created successfully', response);
        this.router.navigate(['/ponds', this.newSensor.id]);
      },
      error => {
        console.error('Error creating sensor', error);
        alert('Error creating sensor');
      }
    );
  }

  cancel() {
    // Navigate back or to a specific route
    this.router.navigate(['/ponds']);
  }
}
