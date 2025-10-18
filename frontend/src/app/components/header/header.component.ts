import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="nav-brand">
          <a routerLink="/" class="brand-link">Portfolio</a>
        </div>
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link">Projects</a>
          <a routerLink="/skills" routerLinkActive="active" class="nav-link">Skills</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
        </div>
        <div class="nav-toggle" (click)="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .brand-link {
      font-size: 24px;
      font-weight: 700;
      color: #2563eb;
      text-decoration: none;
    }

    .nav-menu {
      display: flex;
      gap: 30px;
    }

    .nav-link {
      color: #374151;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #2563eb;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: #2563eb;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: #374151;
      margin: 3px 0;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 20px 0;
        gap: 20px;
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
