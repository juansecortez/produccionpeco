import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isSidebarActive = false;
  isSidebarVisible = false;
  isSidebarButtonVisible = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  closeSidebar() {
    this.isSidebarActive = false;
  }

  @HostListener('window:resize')
  checkSidebarButtonVisibility() {
    this.isSidebarButtonVisible = window.innerWidth <= 768;
  }
  ngOnInit() {
    this.checkSidebarButtonVisibility();
  }

  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión.
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }
}
