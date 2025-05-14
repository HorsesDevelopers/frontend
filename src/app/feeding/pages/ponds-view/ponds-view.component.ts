import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {PondsCardComponent} from "../../components/ponds-card/ponds-card.component";

@Component({
  selector: 'app-ponds-view',
    imports: [
        MatButton,
        PondsCardComponent
    ],
  templateUrl: './ponds-view.component.html',
  styleUrl: './ponds-view.component.css'
})
export class PondsViewComponent {

}
