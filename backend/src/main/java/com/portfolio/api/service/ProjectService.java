package com.portfolio.api.service;

import com.portfolio.api.model.Project;
import com.portfolio.api.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllActiveProjects() {
        return projectRepository.findByIsActiveTrueOrderByStartDateDesc();
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public List<Project> searchProjectsByTitle(String title) {
        return projectRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Project> searchProjectsByTechnology(String technology) {
        return projectRepository.findByTechnologiesContainingIgnoreCase(technology);
    }

    public Project updateProject(Long id, Project projectDetails) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (optionalProject.isPresent()) {
            Project project = optionalProject.get();
            project.setTitle(projectDetails.getTitle());
            project.setDescription(projectDetails.getDescription());
            project.setImageUrl(projectDetails.getImageUrl());
            project.setGithubUrl(projectDetails.getGithubUrl());
            project.setLiveUrl(projectDetails.getLiveUrl());
            project.setTechnologies(projectDetails.getTechnologies());
            project.setStartDate(projectDetails.getStartDate());
            project.setEndDate(projectDetails.getEndDate());
            project.setActive(projectDetails.isActive());
            return projectRepository.save(project);
        }
        return null;
    }
}
