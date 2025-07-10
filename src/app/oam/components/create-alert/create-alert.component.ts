import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../service/alert.service';
import { FormsModule } from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-create-alert',
  templateUrl: './create-alert.component.html',
  styleUrls: ['./create-alert.component.css'],
  standalone: true,
  imports: [FormsModule, TranslatePipe]
})
export class CreateAlertComponent {
  title = '';
  description = '';
  hour = '';
  minute = '';

  constructor(private alertService: AlertService, private router: Router,
              private http: HttpClient
              ) {}

  async createAlert() {
    const body = {
      title: this.title,
      description: this.description
    }

    this.alertService.create(body).subscribe({
      next: (response) => this.router.navigate(['/communication']),
      error: (error) => console.error('Error al crear alerta:', error)
    });

  }
}
