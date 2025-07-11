import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-confirm-edit-ponds-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './confirm-edit-ponds-dialog.component.html',
  styleUrl: './confirm-edit-ponds-dialog.component.css'
})
export class ConfirmEditPondsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmEditPondsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { count: number }
  ) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
