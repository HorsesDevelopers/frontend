import { Injectable } from '@angular/core';

export interface Alert {
  name: string;
  description: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alerts: Alert[] = [];

  getAlerts(): Alert[] {
    return this.alerts;
  }

  addAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  removeAlert(index: number) {
    this.alerts.splice(index, 1);
  }

}

