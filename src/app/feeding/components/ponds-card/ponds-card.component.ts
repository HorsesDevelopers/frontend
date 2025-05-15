import { Component, Input } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {Pond} from '../../model/pond.entity';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-ponds-card',
  imports: [
    MatCardContent,
    MatCard,
    RouterLink
  ],
  templateUrl: './ponds-card.component.html',
  styleUrl: './ponds-card.component.css'
})
export class PondsCardComponent {
  @Input()pond!: Pond;
}
