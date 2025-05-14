import { Component, Input } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {Pond} from '../../model/pond.entity';

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
  @Input()pond!: Pond;
}
