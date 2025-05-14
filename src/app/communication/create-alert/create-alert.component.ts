import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../alert.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-alert',
  templateUrl: './create-alert.component.html',
  styleUrls: ['./create-alert.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CreateAlertComponent {
  name = '';
  description = '';
  hour = '';
  minute = '';

  constructor(private alertService: AlertService, private router: Router) {}

  createAlert() {
    const timestamp = `${this.hour}:${this.minute}`;
    this.alertService.addAlert({
      name: this.name,
      description: this.description,
      timestamp
    });
    this.router.navigate(['/communication']);
  }
}
