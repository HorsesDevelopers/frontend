import {Component, inject, OnInit} from '@angular/core';
import {ScheduleService} from '../../service/schedule.service';
import {MatTableDataSource} from '@angular/material/table';
import {Schedule} from '../../interfaces/schedule.interface';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {TranslateModule, TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-sdap-view',
  imports: [
    NgForOf,
    FormsModule,
    TranslatePipe,
    TranslateModule
  ],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css'
})
export class ScheduleViewComponent implements OnInit {

  protected scheduleData!: Schedule;
  protected dataSource: MatTableDataSource<any>;
  private scheduleService: ScheduleService = inject(ScheduleService);
  private router: Router = inject(Router);
  searchText: string = '';

  constructor() {
    this.scheduleData = {
      name: '',
      species: '',
      size: 0,
      mass: 0,
      foodKind: '',
      foodWeight: 0,
      loopC: 0,
      sensorConditionA: '',
      sensorConditionB: '',
      comment: ''
    };
    this.dataSource = new MatTableDataSource();
    console.log(this.scheduleData);
  }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  private getAllSchedules() {
    this.scheduleService.getAll().subscribe((response: Schedule[]) => {
      this.dataSource.data = response;
    });
  }

  protected createNewSchedule() {
    this.router.navigate(['/schedule/new']).then();
  }

  protected goToPending() {
    this.router.navigate(['/schedule/pending']).then();
  }

  protected deleteSchedule(id: number) {
    this.scheduleService.delete(id).subscribe({
      next: () => {
        this.getAllSchedules();
      },
      error: (error) => {
        console.error('Error deleting schedule:', error);
      }
    });
  }



}
