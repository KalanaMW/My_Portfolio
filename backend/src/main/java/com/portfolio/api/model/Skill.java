package com.portfolio.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Skill name is required")
    @Column(nullable = false)
    private String name;

    @Min(value = 1, message = "Proficiency level must be at least 1")
    @Max(value = 100, message = "Proficiency level must not exceed 100")
    @Column(nullable = false)
    private Integer proficiencyLevel;

    @Column(name = "skill_type")
    private String skillType; // e.g., "Frontend", "Backend", "Database", "Tools"

    @Column(nullable = false)
    private boolean isActive = true;

    // Constructors
    public Skill() {
    }

    public Skill(String name, Integer proficiencyLevel, String skillType) {
        this.name = name;
        this.proficiencyLevel = proficiencyLevel;
        this.skillType = skillType;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getProficiencyLevel() {
        return proficiencyLevel;
    }

    public void setProficiencyLevel(Integer proficiencyLevel) {
        this.proficiencyLevel = proficiencyLevel;
    }

    public String getSkillType() {
        return skillType;
    }

    public void setSkillType(String skillType) {
        this.skillType = skillType;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
