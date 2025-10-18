import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Portfolio</h3>
          <p>Built with Angular, Spring Boot, and SQL Server</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">Email</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1f2937;
      color: #fff;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .footer-section h3 {
      color: #2563eb;
      margin-bottom: 15px;
      font-size: 24px;
    }

    .footer-section h4 {
      margin-bottom: 15px;
      color: #e5e7eb;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 8px;
    }

    .footer-section ul li a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #2563eb;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-link {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-link:hover {
      color: #2563eb;
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      text-align: center;
      padding: 20px;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
}
