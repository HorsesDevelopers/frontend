import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationSectionComponent } from "./iam/components/authentication-section/authentication-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthenticationSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AquaSense';
}
