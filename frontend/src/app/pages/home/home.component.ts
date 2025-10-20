import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { SkillService } from '../../services/skill.service';
import { Project } from '../../models/project.model';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to My Portfolio</h1>
          <p class="hero-subtitle">Full-Stack Developer specializing in Angular, Spring Boot, and SQL Server</p>
          <div class="hero-buttons">
            <a routerLink="/projects" class="btn btn-primary">View Projects</a>
            <a routerLink="/contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="featured-projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid" *ngIf="featuredProjects.length > 0; else loadingProjects">
            <div class="project-card" *ngFor="let project of featuredProjects.slice(0, 3)">
              <div class="project-image">
                <img [src]="project.imageUrl || 'https://via.placeholder.com/400x300'" [alt]="project.title">
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tech">{{ project.technologies }}</div>
                <div class="project-links">
                  <a [href]="project.githubUrl" target="_blank" class="project-link" *ngIf="project.githubUrl">GitHub</a>
                  <a [href]="project.liveUrl" target="_blank" class="project-link" *ngIf="project.liveUrl">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
          <ng-template #loadingProjects>
            <div class="loading">Loading projects...</div>
          </ng-template>
          <div class="section-footer">
            <a routerLink="/projects" class="btn btn-outline">View All Projects</a>
          </div>
        </div>
      </section>

      <!-- Skills Overview -->
      <section class="skills-overview">
        <div class="container">
          <h2 class="section-title">Technical Skills</h2>
          <div class="skills-grid" *ngIf="skills.length > 0; else loadingSkills">
            <div class="skill-category" *ngFor="let skillType of skillTypes">
              <h3 class="skill-category-title">{{ skillType }}</h3>
              <div class="skill-items">
                <div class="skill-item" *ngFor="let skill of getSkillsByType(skillType)">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.proficiencyLevel"></div>
                  </div>
                  <span class="skill-level">{{ skill.proficiencyLevel }}%</span>
                </div>
              </div>
            </div>
          </div>
          <ng-template #loadingSkills>
            <div class="loading">Loading skills...</div>
          </ng-template>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 40px;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 30px;
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
      color: #2563eb;
    }

    .btn-outline {
      background: transparent;
      color: #2563eb;
      border: 2px solid #2563eb;
    }

    .btn-outline:hover {
      background: #2563eb;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .featured-projects,
    .skills-overview {
      padding: 80px 0;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 50px;
      color: #1f2937;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .project-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-content {
      padding: 25px;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #1f2937;
    }

    .project-description {
      color: #6b7280;
      margin-bottom: 15px;
      line-height: 1.6;
    }

    .project-tech {
      color: #2563eb;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .project-links {
      display: flex;
      gap: 15px;
    }

    .project-link {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .project-link:hover {
      color: #1d4ed8;
    }

    .section-footer {
      text-align: center;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .skill-category {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .skill-category-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #1f2937;
      text-align: center;
    }

    .skill-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      gap: 15px;
    }

    .skill-name {
      min-width: 100px;
      font-weight: 500;
      color: #374151;
    }

    .skill-bar {
      flex: 1;
      height: 8px;
      background: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #2563eb, #3b82f6);
      transition: width 0.3s ease;
    }

    .skill-level {
      min-width: 40px;
      text-align: right;
      font-weight: 600;
      color: #2563eb;
    }

    .loading {
      text-align: center;
      color: #6b7280;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .skill-item {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
      }

      .skill-name {
        min-width: auto;
      }

      .skill-level {
        text-align: left;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];
  skills: Skill[] = [];
  skillTypes: string[] = [];

  constructor(
    private projectService: ProjectService,
    private skillService: SkillService
  ) {}

  ngOnInit() {
    this.loadFeaturedProjects();
    this.loadSkills();
  }

  loadFeaturedProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (projects) => {
        this.featuredProjects = projects.filter(p => p.active !== false);
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  loadSkills() {
    this.skillService.getAllSkills().subscribe({
      next: (skills) => {
        this.skills = skills.filter(s => s.active !== false);
  this.skillTypes = [...new Set(this.skills.map(s => s.skillType).filter((type): type is string => typeof type === 'string'))];
      },
      error: (error) => {
        console.error('Error loading skills:', error);
      }
    });
  }

  getSkillsByType(skillType: string): Skill[] {
    return this.skills.filter(s => s.skillType === skillType);
  }
}

