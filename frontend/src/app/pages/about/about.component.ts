import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="container">
        <!-- Hero Section -->
        <div class="about-hero">
          <div class="hero-content">
            <div class="profile-image">
              <img src="https://via.placeholder.com/300x300" alt="Profile Picture" class="profile-img">
            </div>
            <div class="hero-text">
              <h1 class="hero-title">About Me</h1>
              <p class="hero-subtitle">Passionate Full-Stack Developer</p>
              <p class="hero-description">
                I'm a dedicated software developer with a passion for creating innovative solutions 
                using modern technologies. With expertise in Angular, Spring Boot, and SQL Server, 
                I enjoy building scalable web applications that make a difference.
              </p>
            </div>
          </div>
        </div>

        <!-- Story Section -->
        <div class="story-section">
          <div class="section-content">
            <h2 class="section-title">My Journey</h2>
            <div class="story-grid">
              <div class="story-item">
                <div class="story-icon">🎓</div>
                <h3>Education</h3>
                <p>
                  I hold a degree in Computer Science and have continuously expanded my knowledge 
                  through online courses, certifications, and hands-on projects. Learning is 
                  a lifelong passion that drives my career.
                </p>
              </div>
              <div class="story-item">
                <div class="story-icon">💼</div>
                <h3>Experience</h3>
                <p>
                  With several years of experience in full-stack development, I've worked on 
                  various projects ranging from small business websites to enterprise-level 
                  applications. Each project teaches me something new.
                </p>
              </div>
              <div class="story-item">
                <div class="story-icon">🚀</div>
                <h3>Passion</h3>
                <p>
                  I'm passionate about clean code, user experience, and continuous improvement. 
                  I believe in the power of technology to solve real-world problems and make 
                  people's lives better.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Values Section -->
        <div class="values-section">
          <div class="section-content">
            <h2 class="section-title">What I Value</h2>
            <div class="values-grid">
              <div class="value-card">
                <h3>Quality</h3>
                <p>I believe in writing clean, maintainable code that stands the test of time.</p>
              </div>
              <div class="value-card">
                <h3>Collaboration</h3>
                <p>Great software is built by great teams. I value open communication and teamwork.</p>
              </div>
              <div class="value-card">
                <h3>Innovation</h3>
                <p>I'm always exploring new technologies and approaches to solve problems better.</p>
              </div>
              <div class="value-card">
                <h3>Learning</h3>
                <p>The tech industry evolves rapidly, and I'm committed to staying current.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interests Section -->
        <div class="interests-section">
          <div class="section-content">
            <h2 class="section-title">Beyond Code</h2>
            <div class="interests-grid">
              <div class="interest-item">
                <div class="interest-icon">📚</div>
                <h3>Reading</h3>
                <p>I love reading tech blogs, books on software architecture, and personal development.</p>
              </div>
              <div class="interest-item">
                <div class="interest-icon">🏃‍♂️</div>
                <h3>Fitness</h3>
                <p>Staying active helps me maintain focus and creativity in my work.</p>
              </div>
              <div class="interest-item">
                <div class="interest-icon">🎵</div>
                <h3>Music</h3>
                <p>Music is my constant companion during coding sessions and helps me stay focused.</p>
              </div>
              <div class="interest-item">
                <div class="interest-icon">✈️</div>
                <h3>Travel</h3>
                <p>Exploring new places gives me fresh perspectives and inspiration.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
          <div class="cta-content">
            <h2>Let's Work Together</h2>
            <p>I'm always interested in new opportunities and exciting projects.</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary">Get In Touch</a>
              <a href="/projects" class="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
      background: #f9fafb;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .about-hero {
      padding: 80px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .hero-content {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 50px;
      align-items: center;
    }

    .profile-image {
      text-align: center;
    }

    .profile-img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 5px solid white;
      object-fit: cover;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      margin-bottom: 20px;
      opacity: 0.9;
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      opacity: 0.9;
    }

    .story-section,
    .values-section,
    .interests-section {
      padding: 80px 0;
    }

    .section-content {
      max-width: 1000px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 50px;
    }

    .story-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .story-item {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .story-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .story-item h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 15px;
    }

    .story-item p {
      color: #6b7280;
      line-height: 1.6;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .value-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .value-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 15px;
    }

    .value-card p {
      color: #6b7280;
      line-height: 1.6;
    }

    .interests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .interest-item {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .interest-icon {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    .interest-item h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 15px;
    }

    .interest-item p {
      color: #6b7280;
      line-height: 1.6;
    }

    .cta-section {
      padding: 80px 0;
      background: #1f2937;
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .cta-content p {
      font-size: 1.25rem;
      margin-bottom: 40px;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 15px 30px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: #2563eb;
      color: white;
    }

    .btn-primary:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: #1f2937;
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 30px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .profile-img {
        width: 150px;
        height: 150px;
      }

      .section-title {
        font-size: 2rem;
      }

      .story-grid,
      .values-grid,
      .interests-grid {
        grid-template-columns: 1fr;
      }

      .cta-content h2 {
        font-size: 2rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class AboutComponent {
}
