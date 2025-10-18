package com.portfolio.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Project title is required")
    @Size(max = 100, message = "Title must not exceed 100 characters")
    @Column(nullable = false)
    private String title;

    @Size(max = 500, message = "Description must not exceed 500 characters")
    private String description;

    @Size(max = 200, message = "Image URL must not exceed 200 characters")
    private String imageUrl;

    @Size(max = 200, message = "GitHub URL must not exceed 200 characters")
    private String githubUrl;

    @Size(max = 200, message = "Live URL must not exceed 200 characters")
    private String liveUrl;

    @Size(max = 100, message = "Technologies must not exceed 100 characters")
    private String technologies;

    private LocalDate startDate;
    private LocalDate endDate;

    @Column(nullable = false)
    private boolean isActive = true;

    // Constructors
    public Project() {
    }

    public Project(String title, String description, String imageUrl, String githubUrl,
            String liveUrl, String technologies, LocalDate startDate, LocalDate endDate) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.githubUrl = githubUrl;
        this.liveUrl = liveUrl;
        this.technologies = technologies;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLiveUrl() {
        return liveUrl;
    }

    public void setLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
