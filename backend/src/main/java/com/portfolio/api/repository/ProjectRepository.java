package com.portfolio.api.repository;

import com.portfolio.api.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByIsActiveTrueOrderByStartDateDesc();

    List<Project> findByTitleContainingIgnoreCase(String title);

    List<Project> findByTechnologiesContainingIgnoreCase(String technology);
}
