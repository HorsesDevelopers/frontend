import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PondDetail} from '../../interfaces/pondDetail';
import {PondDetailService} from '../../service/pond-detail.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf, NgIf} from '@angular/common';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-pond-detail-view',
  imports: [
    MatTabGroup,
    MatTab,
    MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, NgIf, MatFabButton
  ],
  templateUrl: './pond-detail-view.component.html',
  styleUrl: './pond-detail-view.component.css'
})
export class PondDetailViewComponent implements OnInit {
  protected pondDetailData!: PondDetail;
  protected dataSource!: MatTableDataSource<any>;
  private pondDetailService: PondDetailService = inject(PondDetailService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  fishTypes: string[] = [];
  pondId!: number;

  constructor() {
    this.pondDetailData = {
      food: [],
      createdAt: '', fish: [], id: 0, name: '', size: 0, ubication: '', volume: 0, waterType: '', imageUrl:'', fishPerTypeQuantity: {}};
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.pondId = Number(this.route.snapshot.paramMap.get('id')); // Retrieve the ID from the route
    this.getAllPondDetails();
    console.log('ponddetail',this.pondDetailData);
  }

  private getAllPondDetails() {
    this.pondDetailService.getAll().subscribe((response: PondDetail[]) => {
      this.dataSource.data = response;
      const found = response.find(p => p.id === this.pondId);
      if (found) {
        this.pondDetailData = found;
        this.fishTypes = Object.keys(this.pondDetailData.fishPerTypeQuantity);
      }
    });

  }
}
