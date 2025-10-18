package com.portfolio.api.controller;

import com.portfolio.api.model.Skill;
import com.portfolio.api.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = "http://localhost:4200")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping
    public ResponseEntity<List<Skill>> getAllActiveSkills() {
        List<Skill> skills = skillService.getAllActiveSkills();
        return ResponseEntity.ok(skills);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Skill>> getAllSkills() {
        List<Skill> skills = skillService.getAllSkills();
        return ResponseEntity.ok(skills);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Skill> getSkillById(@PathVariable Long id) {
        Optional<Skill> skill = skillService.getSkillById(id);
        return skill.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/type/{skillType}")
    public ResponseEntity<List<Skill>> getSkillsByType(@PathVariable String skillType) {
        List<Skill> skills = skillService.getSkillsByType(skillType);
        return ResponseEntity.ok(skills);
    }

    @PostMapping
    public ResponseEntity<Skill> createSkill(@Valid @RequestBody Skill skill) {
        Skill savedSkill = skillService.saveSkill(skill);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSkill);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Skill> updateSkill(@PathVariable Long id, @Valid @RequestBody Skill skill) {
        Skill updatedSkill = skillService.updateSkill(id, skill);
        if (updatedSkill != null) {
            return ResponseEntity.ok(updatedSkill);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
        skillService.deleteSkill(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Skill>> searchByName(@RequestParam String name) {
        List<Skill> skills = skillService.searchSkillsByName(name);
        return ResponseEntity.ok(skills);
    }
}
