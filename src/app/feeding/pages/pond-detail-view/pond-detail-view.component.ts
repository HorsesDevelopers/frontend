import {Component, inject, OnInit} from '@angular/core';
import {PondDetail} from '../../interfaces/pondDetail';
import {PondDetailService} from '../../service/pond-detail.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-pond-detail-view',
  imports: [
    MatTabGroup,
    MatTab,
    MatFormFieldModule, MatInputModule, MatSelectModule
  ],
  templateUrl: './pond-detail-view.component.html',
  styleUrl: './pond-detail-view.component.css'
})
export class PondDetailViewComponent implements OnInit{
  protected pondDetailData!: PondDetail;
  protected dataSource!: MatTableDataSource<any>;
  private pondDetailService: PondDetailService = inject(PondDetailService);

  constructor() {
    this.pondDetailData = {createdAt: '', fish: [], id: 0, name: '', size: 0, ubication: '', volume: 0, waterType: ''};
    this.dataSource = new MatTableDataSource();
    console.log(this.pondDetailData);
  }

  ngOnInit(): void {
    this.getAllPondDetails();
  }

  private getAllPondDetails() {
    this.pondDetailService.getAll().subscribe((response: PondDetail[]) => {
      this.dataSource.data = response;
    });
  }
}
