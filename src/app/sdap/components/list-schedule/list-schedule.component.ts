import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../service/schedule.service';
import { Schedule } from '../../interfaces/schedule.interface';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-list-sdap',
  templateUrl: './list-schedule.component.html',
  styleUrl: './list-schedule.component.css',
  imports: [
    NgForOf,
    TranslatePipe
  ],
  providers: [ScheduleService]
})
export class ListScheduleComponent implements OnInit {
  schedules: Schedule[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getAll().subscribe(schedules => {
      this.schedules = schedules;
    });
  }
}
