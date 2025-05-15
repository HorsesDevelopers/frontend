import {Component, inject, OnInit} from '@angular/core';
import { PondDetail } from '../../interfaces/pondDetail';
import {ActivatedRoute, Router} from '@angular/router';
import {PondDetailService} from '../../service/pond-detail.service';
import {ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-create-food',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-food.component.html',
  styleUrl: './create-food.component.css'
})
export class CreateFoodComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private pondService = inject(PondDetailService);

  ponds: PondDetail[] = [];

  ngOnInit() {
    const pondIdParam = this.route.snapshot.paramMap.get('pondId');
    this.loadPonds();
  }

  loadPonds() {
    this.pondService.getAll().subscribe(ponds => {
      this.ponds = ponds;
    });
  }


}
