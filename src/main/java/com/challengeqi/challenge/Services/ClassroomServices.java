package com.challengeqi.challenge.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Models.Classroom;
import com.challengeqi.challenge.Repository.ClassroomRepository;

@Service
public class ClassroomServices {

    @Autowired
    ClassroomRepository classroomRepo;

    public Classroom createClassroom(Classroom classroom) {
        return classroomRepo.save(classroom); 
    }

    public List<Classroom> getClassrooms() {
        return classroomRepo.findAll(); 
    }

    public Classroom getClassroom(Long id) {
        return classroomRepo.findById(id).orElse(null); 
    }

    public void deleteClassroom(Long id) {
        classroomRepo.deleteById(id); 
    }


}