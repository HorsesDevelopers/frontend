import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PondService } from '../../service/pond.service';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-ponds',
  templateUrl: './edit-ponds.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./edit-ponds.component.css']
})
export class EditPondsComponent implements OnInit {
  pondIds: string[] = [];
  ponds: any[] = [];
  saving: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pondService: PondService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pondIds = params['ids'] ? params['ids'].split(',') : [];
      this.loadPonds();
    });
  }

  loadPonds() {
    this.ponds = [];
    this.pondIds.forEach(id => {
      this.pondService.getById(id).subscribe(pond => {
        this.ponds.push(pond);
      });
    });
  }

  saveAll() {
    this.saving = true;
    const requests = this.ponds.map(pond =>
      this.pondService.update(pond.id, pond).toPromise()
    );
    Promise.all(requests)
      .then(() => {
        this.saving = false;
        alert('Ponds actualizados correctamente');
        this.router.navigate(['/ponds-view']);
      })
      .catch(() => {
        this.saving = false;
        alert('Ocurrió un error al guardar los cambios');
      });
  }

  cancel() {
    this.router.navigate(['/ponds-view']);
  }
  currentIndex: number = 0;

  get currentPond() {
    return this.ponds[this.currentIndex];
  }

  nextPond() {
    if (this.currentIndex < this.ponds.length - 1) {
      this.currentIndex++;
    }
  }

  prevPond() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
