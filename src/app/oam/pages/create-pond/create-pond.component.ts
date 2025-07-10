import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PondService } from '../../service/pond.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-pond',
  templateUrl: './create-pond.component.html',
  styleUrls: ['./create-pond.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class CreatePondComponent {
  newPond = {
    name: '',
    ubication: '',
    waterType: '',
    volume: null,
    area: null
  };

  constructor(private pondService: PondService, private router: Router) {}

  createPond() {
    this.pondService.create(this.newPond).subscribe({
      next: () => this.cancel(),
      error: err => alert('Error al crear el pond: ' + err.message)
    });
  }

  cancel() {
    this.router.navigate(['/ponds']);
  }
}

