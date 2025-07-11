import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';
import { Pond } from '../../model/pond.entity';
import { MatTableDataSource } from '@angular/material/table';
import { PondsCardComponent } from '../../components/ponds-card/ponds-card.component';
import { PondService } from '../../service/pond.service';
import { HttpErrorResponse } from '@angular/common/http';
import {ConfirmEditPondsDialogComponent} from '../confirm-edit-ponds-dialog/confirm-edit-ponds-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-ponds-view',
  imports: [
    NgForOf,
    PondsCardComponent
  ],
  templateUrl: './ponds-view.component.html',
  styleUrl: './ponds-view.component.css'
})
export class PondsViewComponent implements OnInit {
  protected dataSource: MatTableDataSource<Pond> = new MatTableDataSource<Pond>();
  ponds: any[] = [];

  constructor(
    private pondService: PondService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.pondService.getAll().subscribe({
      next: (ponds: Pond[]) => {
        this.dataSource.data = ponds;
        const pondsWithoutRegister = ponds.filter(p => p.name === 'Pond without register');
        if (pondsWithoutRegister.length > 0) {
          const dialogRef = this.dialog.open(ConfirmEditPondsDialogComponent, {
            data: { count: pondsWithoutRegister.length },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              const ids = pondsWithoutRegister.map(p => p.id).join(',');
              this.router.navigate(['/edit-ponds'], { queryParams: { ids } });
            }
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error fetching ponds:', err);
      }
    });
  }

  private loadPonds(): void {
    this.pondService.getAll().subscribe({
      next: (ponds: Pond[]) => {
        this.dataSource.data = ponds;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error fetching ponds:', err);
      }
    });
  }

  navigateToDetail(pondId: number): void {
    console.log('Navigating to pond detail with ID:', pondId);
    if (pondId === 1) {
      this.router.navigate(['/pond-detail', pondId]);
    }
  }

  navigateToCreate(): void {
    this.router.navigate(['/create-pond']);
  }
}
