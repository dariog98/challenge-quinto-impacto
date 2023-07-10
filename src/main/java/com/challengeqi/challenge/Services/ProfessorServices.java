package com.challengeqi.challenge.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Dtos.ProfessorBasicDto;
import com.challengeqi.challenge.Dtos.ProfessorCompleteDto;
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

    ModelMapper modelMapper = new ModelMapper();

    public Professor createProfessor(Professor professor) {
        return professorRepo.save(professor); 
    }

    public List<ProfessorBasicDto> getProfessors() {
        List<Professor> professors =  professorRepo.findAll();
        List<ProfessorBasicDto> professorDtos = modelMapper.map(professors, new TypeToken<List<ProfessorBasicDto>>() {}.getType());
        return professorDtos;
    }

    public ProfessorCompleteDto getProfessor(Long id) {
        Professor professor = professorRepo.findById(id).orElse(null);
        ProfessorCompleteDto professorDto = modelMapper.map(professor, ProfessorCompleteDto.class);
        return professorDto;
    }

    public ProfessorCompleteDto editProfessor(Long id, Professor professor) {
        Professor regProfessor = professorRepo.findById(id).orElse(null);
        regProfessor.setNames(professor.getNames());
        regProfessor.setSurnames(professor.getSurnames());
        regProfessor.setDni(professor.getDni());
        regProfessor.setBirthdate(professor.getBirthdate());
        regProfessor.setPhone(professor.getPhone());
        regProfessor.setAddress(professor.getAddress());
        professorRepo.save(regProfessor);
        ProfessorCompleteDto professorDto = modelMapper.map(regProfessor, ProfessorCompleteDto.class);
        return professorDto;
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