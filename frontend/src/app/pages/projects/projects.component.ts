import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="projects-container">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">A showcase of my recent work and side projects</p>
        </div>

        <!-- Search and Filter -->
        <div class="search-section">
          <div class="search-bar">
            <input 
              type="text" 
              [(ngModel)]="searchTerm" 
              (input)="onSearch()"
              placeholder="Search projects by title or technology..."
              class="search-input">
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid" *ngIf="filteredProjects.length > 0; else noProjects">
          <div class="project-card" *ngFor="let project of filteredProjects">
            <div class="project-image">
              <img [src]="project.imageUrl || 'https://via.placeholder.com/400x300'" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.githubUrl" target="_blank" class="project-link" *ngIf="project.githubUrl">
                    <i class="icon">📁</i> GitHub
                  </a>
                  <a [href]="project.liveUrl" target="_blank" class="project-link" *ngIf="project.liveUrl">
                    <i class="icon">🌐</i> Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-meta">
                <div class="project-tech" *ngIf="project.technologies">
                  <span class="tech-label">Technologies:</span>
                  <span class="tech-list">{{ project.technologies }}</span>
                </div>
                <div class="project-dates" *ngIf="project.startDate">
                  <span class="date-label">Duration:</span>
                  <span class="date-range">
                    {{ formatDate(project.startDate || '') }} - {{ formatDate(project.endDate || '') || 'Present' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ng-template #noProjects>
          <div class="no-projects">
            <div class="no-projects-content">
              <h3>No projects found</h3>
              <p *ngIf="searchTerm">Try adjusting your search terms</p>
              <p *ngIf="!searchTerm">Projects will appear here once they're added</p>
            </div>
          </div>
        </ng-template>

        <!-- Loading State -->
        <div class="loading" *ngIf="isLoading">
          <div class="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      min-height: 100vh;
      padding: 40px 0;
      background: #f9fafb;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 15px;
    }

    .page-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }

    .search-section {
      margin-bottom: 40px;
    }

    .search-bar {
      max-width: 500px;
      margin: 0 auto;
    }

    .search-input {
      width: 100%;
      padding: 15px 20px;
      border: 2px solid #e5e7eb;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .search-input:focus {
      outline: none;
      border-color: #2563eb;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
    }

    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-links {
      display: flex;
      gap: 15px;
    }

    .project-link {
      background: #2563eb;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .project-link:hover {
      background: #1d4ed8;
    }

    .project-content {
      padding: 30px;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 15px;
    }

    .project-description {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .project-meta {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .project-tech,
    .project-dates {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .tech-label,
    .date-label {
      font-weight: 600;
      color: #374151;
      font-size: 0.9rem;
    }

    .tech-list,
    .date-range {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .no-projects {
      text-align: center;
      padding: 80px 20px;
    }

    .no-projects-content h3 {
      font-size: 1.5rem;
      color: #374151;
      margin-bottom: 10px;
    }

    .no-projects-content p {
      color: #6b7280;
    }

    .loading {
      text-align: center;
      padding: 40px;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #e5e7eb;
      border-top: 4px solid #2563eb;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-content {
        padding: 20px;
      }

      .project-links {
        flex-direction: column;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.isLoading = true;
    this.projectService.getAllProjects().subscribe({
      next: (projects) => {
        this.projects = projects.filter(p => p.active !== false);
        this.filteredProjects = [...this.projects];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.isLoading = false;
      }
    });
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.filteredProjects = [...this.projects];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredProjects = this.projects.filter(project =>
      project.title.toLowerCase().includes(term) ||
      (project.technologies && project.technologies.toLowerCase().includes(term)) ||
      (project.description && project.description.toLowerCase().includes(term))
    );
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  }
}
