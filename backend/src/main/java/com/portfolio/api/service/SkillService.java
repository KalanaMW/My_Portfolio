package com.portfolio.api.service;

import com.portfolio.api.model.Skill;
import com.portfolio.api.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getAllActiveSkills() {
        return skillRepository.findByIsActiveTrueOrderByProficiencyLevelDesc();
    }

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Optional<Skill> getSkillById(Long id) {
        return skillRepository.findById(id);
    }

    public Skill saveSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }

    public List<Skill> getSkillsByType(String skillType) {
        return skillRepository.findBySkillTypeOrderByProficiencyLevelDesc(skillType);
    }

    public List<Skill> searchSkillsByName(String name) {
        return skillRepository.findByNameContainingIgnoreCase(name);
    }

    public Skill updateSkill(Long id, Skill skillDetails) {
        Optional<Skill> optionalSkill = skillRepository.findById(id);
        if (optionalSkill.isPresent()) {
            Skill skill = optionalSkill.get();
            skill.setName(skillDetails.getName());
            skill.setProficiencyLevel(skillDetails.getProficiencyLevel());
            skill.setSkillType(skillDetails.getSkillType());
            skill.setActive(skillDetails.isActive());
            return skillRepository.save(skill);
        }
        return null;
    }
}
