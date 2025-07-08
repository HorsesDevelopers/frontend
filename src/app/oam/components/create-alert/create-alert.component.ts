import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../service/alert.service';
import { FormsModule } from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-create-alert',
  templateUrl: './create-alert.component.html',
  styleUrls: ['./create-alert.component.css'],
  standalone: true,
  imports: [FormsModule, TranslatePipe]
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
