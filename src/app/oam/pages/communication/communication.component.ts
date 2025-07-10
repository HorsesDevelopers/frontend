import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../service/alert.service';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {Alert} from '../../interfaces/Alert.interface';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService, private router: Router) {}

  ngOnInit(): void {
    this.alertService.getAll().subscribe((response: Array<Alert>) => this.alerts = response);

  }

  log() {
    console.log(this.alerts);
  }

  goToCreateAlert() {
    this.router.navigate(['/create-alert']);
  }



}

