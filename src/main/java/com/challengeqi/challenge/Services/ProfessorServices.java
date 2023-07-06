package com.challengeqi.challenge.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Models.Professor;
import com.challengeqi.challenge.Repository.ProfessorRepository;

@Service
public class ProfessorServices {

    @Autowired
    ProfessorRepository professorRepo;

    public Professor createProfessor(Professor professor) {
        return professorRepo.save(professor); 
    }

    public List<Professor> getProfessors() {
        return professorRepo.findAll(); 
    }

    public Professor getProfessor(Long id) {
        return professorRepo.findById(id).orElse(null); 
    }

    public void deleteProfessor(Long id) {
        professorRepo.deleteById(id); 
    }


}