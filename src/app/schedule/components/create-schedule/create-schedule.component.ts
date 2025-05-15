import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {ScheduleService} from '../../service/schedule.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Schedule} from '../../interfaces/schedule.interface';

@Component({
  selector: 'app-create-schedule',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-schedule.component.html',
  styleUrl: './create-schedule.component.css'
})
export class CreateScheduleComponent {
  private router: Router = inject(Router);
  private scheduleService: ScheduleService = inject(ScheduleService);
  private formBuilder = inject(FormBuilder);

  scheduleForm: FormGroup = this.formBuilder.group({
    pondName: ['', Validators.required],
    species: ['', Validators.required],
    size: ['', Validators.required],
    mass: ['', Validators.required],
    food: ['', Validators.required],
    weightOfFood: ['', Validators.required],
    loop: ['', Validators.required],
    sensorConditionMin: [''],
    sensorConditionMax: [''],
    comment: ['']
  });

  createSchedule(): void {
    try {
      console.log("creating")
      if (this.scheduleForm.invalid) return;

      const scheduleData: Schedule = {
        id: 0,
        pondName: this.scheduleForm.value.pondName,
        food: this.scheduleForm.value.food,
        size: this.scheduleForm.value.size,
        status: 'Pendent'
      };

      this.scheduleService.create(scheduleData).subscribe({
        next: () => this.router.navigate(['/schedule']),
        error: (err) => console.error('Error al crear horario:', err)
      });
    } catch(error) {
      console.error('Error al crear horario:', error);
    }

  }

  goBack(): void {
    this.router.navigate(['/schedule']).then();
  }


}
