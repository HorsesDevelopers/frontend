import {Component, inject, OnInit} from '@angular/core';
import {ScheduleService} from '../../service/schedule.service';
import {MatTableDataSource} from '@angular/material/table';
import {Schedule} from '../../interfaces/schedule.interface';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-schedule-view',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css'
})
export class ScheduleViewComponent implements OnInit {

  protected scheduleData!: Schedule;
  protected dataSource: MatTableDataSource<any>;
  private scheduleService: ScheduleService = inject(ScheduleService);
  searchText: string = '';

  constructor() {
    this.scheduleData = {food: '', id: 0, pondName: '', size: 0, status: ''};
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



}
