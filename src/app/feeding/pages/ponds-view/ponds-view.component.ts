import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {Pond} from '../../model/pond.entity';
import {MatTableDataSource} from '@angular/material/table';
import {PondsCardComponent} from '../../components/ponds-card/ponds-card.component';
import {PondService} from '../../service/pond.service';

@Component({
  selector: 'app-ponds-view',
  imports: [
    MatButton,
    NgIf,
    NgForOf,
    PondsCardComponent
  ],
  templateUrl: './ponds-view.component.html',
  styleUrl: './ponds-view.component.css'
})
export class PondsViewComponent implements OnInit {
  protected pondData!: Pond;
protected dataSource: MatTableDataSource<Pond>=new MatTableDataSource<Pond>();
private pondService: PondService = inject(PondService);
constructor() {
  this.pondData = new Pond({});
  this.dataSource = new MatTableDataSource();
  console.log(this.pondService);
}
  ngOnInit(): void {
    this.getAllPond();
  }
  private getAllPond() {
    this.pondService.getAll().subscribe((response: Pond[]) => {
      this.dataSource.data = response;
    });
  }
}
