package com.portfolio.api.repository;

import com.portfolio.api.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

    List<Skill> findByIsActiveTrueOrderByProficiencyLevelDesc();

    List<Skill> findBySkillTypeOrderByProficiencyLevelDesc(String skillType);

    List<Skill> findByNameContainingIgnoreCase(String name);
}
