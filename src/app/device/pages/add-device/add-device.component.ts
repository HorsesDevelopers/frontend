import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-device',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './add-device.component.html',
  styleUrl: './add-device.component.css'
})
export class AddDeviceComponent {
  deviceType: string = '';
}
