import { Component, Input } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-ponds-card',
  imports: [
    MatCardContent,
    MatCard
  ],
  templateUrl: './ponds-card.component.html',
  styleUrl: './ponds-card.component.css'
})
export class PondsCardComponent {
  @Input() pondName: string = '';
  @Input() sensorCount: number = 0;
  @Input() fishCount: number = 0;
  @Input() imageUrl: string = 'assets/default-pond.jpg'; // Default image path
}
