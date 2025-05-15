import {Component, inject, OnInit} from '@angular/core';
import {SchedulePendingService} from '../../service/schedule-pending.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {PendingSchedule} from '../../interfaces/pending-schedule.interface';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-schedule-pending',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './schedule-pending.component.html',
  styleUrl: './schedule-pending.component.css'
})
export class SchedulePendingComponent implements OnInit {

  private router: Router = inject(Router);
  protected schedulePendingData: PendingSchedule = {
    pendings: [],
    staff: []
  };
  private schedulePendingService: SchedulePendingService = inject(SchedulePendingService);
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSchedulePending().then();

  }

  async getSchedulePending() {
    try {
      this.isLoading = true;
      const response: any = await lastValueFrom(this.http.get('https://my-json-server.typicode.com/HorsesDevelopers/fake-api-2/pendingSchedules'));
      this.schedulePendingData.pendings = response.pendings;
      this.schedulePendingData.staff = response.staff;
      console.log('response', response);
    } catch (error) {
      console.error('Error fetching schedule pending:', error);
    } finally {
      this.isLoading = false;
    }
  }

  public getStaffName(staffId: number | null): string {
    if (!staffId) return '--';
    const staff = this.schedulePendingData.staff.find(s => s.id === staffId);
    return staff ? staff.name : '--';
  }

  goBack() {
    this.router.navigate(['/schedule']).then();
  }

}
