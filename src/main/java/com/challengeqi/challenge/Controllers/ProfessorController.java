package com.challengeqi.challenge.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Models.Professor;
import com.challengeqi.challenge.Services.ProfessorServices;

@RestController
public class ProfessorController {
    
    @Autowired
    ProfessorServices professorServices;

    @GetMapping(value = "api/professors")
    public List<Professor> getProfessors() {
        return professorServices.getProfessors();
    }

    @PostMapping(value = "api/professors")
    public void createProfessor(@RequestBody Professor professor) {
        professorServices.createProfessor(professor);
    }

    @GetMapping(value = "api/professors/{id}")
    public Professor getProfessor(@PathVariable Long id) {
        return professorServices.getProfessor(id);
    }

    @DeleteMapping(value = "api/professors/{id}")
    public void deleteProfessor(@PathVariable Long id) {
        professorServices.deleteProfessor(id);
    }

    @PostMapping(value = "api/professors/{id}/classrooms/{idClassroom}")
    public void addClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        professorServices.addClassroom(id, idClassroom);
    }

    @DeleteMapping(value = "api/professors/{id}/classrooms/{idClassroom}")
    public void removeClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        professorServices.removeClassroom(id, idClassroom);
    }
}
