import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../../service/schedule.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Schedule } from '../../interfaces/schedule.interface';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-create-sdap',
  templateUrl: './create-schedule.component.html',
  imports: [
    ReactiveFormsModule,
    TranslatePipe
  ],
  styleUrl: './create-schedule.component.css'
})
export class CreateScheduleComponent {
  private router: Router = inject(Router);
  private scheduleService: ScheduleService = inject(ScheduleService);
  private formBuilder = inject(FormBuilder);

  scheduleForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    species: ['', Validators.required],
    size: [0, Validators.required],
    mass: [0, Validators.required],
    foodKind: ['', Validators.required],
    foodWeight: [0, Validators.required],
    loopC: [0, Validators.required],
    sensorConditionA: [''],
    sensorConditionB: [''],
    comment: ['']
  });

  createSchedule(): void {
    if (this.scheduleForm.invalid) return;

    const scheduleData: Schedule = this.scheduleForm.value;

    this.scheduleService.create(scheduleData).subscribe({
      next: () => this.router.navigate(['/schedule']),
      error: (err) => console.error('Error al crear horario:', err)
    });
  }
}
