import { Component, Input } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {Pond} from '../../model/pond.entity';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-ponds-card',
  imports: [
    MatCardContent,
    MatCard,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './ponds-card.component.html',
  styleUrl: './ponds-card.component.css'
})
export class PondsCardComponent {
  @Input()pond!: Pond;
}
