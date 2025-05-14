import { Component } from '@angular/core';
import {PondsViewComponent} from './feeding/pages/ponds-view/ponds-view.component';

@Component({
  selector: 'app-root',
  imports: [PondsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AquaSense';
}
