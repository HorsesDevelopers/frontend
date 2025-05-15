import { Component } from '@angular/core';
import {Router, NavigationEnd, RouterLink, RouterOutlet} from '@angular/router';
import { filter } from 'rxjs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNavList} from '@angular/material/list';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatNavList,
    NgIf
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AquaSense';
  logo = 'assets/images/logo.png';
  showSidebar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.showSidebar = !(url === '/sign-in' || url === '/sign-up');
      });
  }

  logout() {
    this.router.navigate(['/sign-in']);
  }
}
