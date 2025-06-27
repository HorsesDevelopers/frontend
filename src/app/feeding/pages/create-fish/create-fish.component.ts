import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FishService } from '../../service/fish.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-fish',
  templateUrl: './create-fish.component.html',
  styleUrl: './create-fish.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CreateFishComponent {
  fish: { type: string; quantity: number | null; pondId: number | null } = { type: '', quantity: null, pondId: null };  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private fishService: FishService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.fish.pondId = +params['pondId'];
    });
  }

  onSubmit() {
    this.loading = true;
    this.error = null;
    this.fishService.create(this.fish).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/ponds', this.fish.pondId]);
      },
      error: () => {
        this.loading = false;
        this.error = 'Error al crear el pez';
      }
    });
  }
}
