import { Component } from '@angular/core';
import {PondsViewComponent} from './feeding/pages/ponds-view/ponds-view.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [PondsViewComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AquaSense';
}
