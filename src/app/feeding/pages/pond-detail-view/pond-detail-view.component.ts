import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PondDetail} from '../../interfaces/pondDetail';
import {PondDetailService} from '../../service/pond-detail.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MatFabButton} from '@angular/material/button';
import {Sensor} from '../../interfaces/Sensor';
import {SensorService} from '../../service/sensor.service';

@Component({
  selector: 'app-pond-detail-view',
  imports: [
    MatTabGroup,
    MatTab,
    MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, NgIf, MatFabButton, NgClass
  ],
  templateUrl: './pond-detail-view.component.html',
  styleUrl: './pond-detail-view.component.css'
})
export class PondDetailViewComponent implements OnInit {
  protected pondDetailData!: PondDetail;
  protected sensorsData: Sensor[]= [];
  protected dataSource!: MatTableDataSource<any>;
  private pondDetailService: PondDetailService = inject(PondDetailService);
  private sensorService: SensorService = inject(SensorService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  fishTypes: string[] = [];
  pondId!: number;


  constructor() {
    this.pondDetailData = {
      food: [],
      createdAt: '',fish: [], id: 0, name: '', size: 0, ubication: '', volume: 0, waterType: '', imageUrl:'', fishPerTypeQuantity: {}};
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.pondId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAllPondDetails();
    this.getAllSensors();
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
  private getAllSensors() {
    this.sensorService.getAll().subscribe((response: Sensor[]) => {
      // Filter sensors that belong to the current pond
      this.sensorsData = response.filter(sensor => sensor.pond_id === this.pondId);
      console.log('sensors for pond', this.sensorsData);
    });
  }
}
