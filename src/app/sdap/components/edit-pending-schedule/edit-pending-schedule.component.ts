import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pending, PendingSchedule, Staff} from '../../interfaces/pending-schedule.interface';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-edit-pending-sdap',
  imports: [
    FormsModule,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './edit-pending-schedule.component.html',
  styleUrl: './edit-pending-schedule.component.css'
})
export class EditPendingScheduleComponent {
  @Input() pending: Pending | null = null;
  @Input() staffList: Staff[] = [];
  @Output() closePopup = new EventEmitter<void>();
  @Output() savePending = new EventEmitter<Pending>();

  editedPending: Pending = {
    id: 0,
    description: '',
    staffId: null,
    status: '',
    alertColor: ''
  }

  statusOptions = ['Pending', 'In Progress', 'Completed'];
  alertColors = [
    { name: 'Orange (Warning)', value: '#F97316' },
    { name: 'Red (Urgent)', value: '#EF4444' },
    { name: 'Green (Normal)', value: '#22C55E' }
  ];

  ngOnInit() {
    if (this.pending) {
      this.editedPending = { ...this.pending };
    }
  }

  close() {
    this.closePopup.emit();
  }

  save() {
    if (this.editedPending) {
      this.savePending.emit(this.editedPending);
    }
  }
}
