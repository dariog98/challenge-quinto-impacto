package com.challengeqi.challenge.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Models.Classroom;
import com.challengeqi.challenge.Models.Professor;
import com.challengeqi.challenge.Repository.ClassroomRepository;
import com.challengeqi.challenge.Repository.ProfessorRepository;

@Service
public class ProfessorServices {

    @Autowired
    ProfessorRepository professorRepo;
    @Autowired
    ClassroomRepository classroomRepo;

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

    public void addClassroom(Long id, Long idClassroom) {
        Professor professor = professorRepo.findById(id).orElse(null);
        Classroom classroom = classroomRepo.findById(idClassroom).orElse(null);
        if (professor != null && classroom != null) {
            classroom.setProfessor(professor);
            classroomRepo.save(classroom);
        }
    }

    public void removeClassroom(Long id, Long idClassroom) {
        Professor professor = professorRepo.findById(id).orElse(null);
        Classroom classroom = classroomRepo.findById(idClassroom).orElse(null);
        if (professor != null && classroom != null) {
            classroom.setProfessor(null);
            classroomRepo.save(classroom);
        }
    }
}