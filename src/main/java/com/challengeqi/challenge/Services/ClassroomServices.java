package com.challengeqi.challenge.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Dtos.ClassroomBasicDto;
import com.challengeqi.challenge.Dtos.ClassroomCompleteDto;
import com.challengeqi.challenge.Models.Classroom;
import com.challengeqi.challenge.Repository.ClassroomRepository;

@Service
public class ClassroomServices {

    @Autowired
    ClassroomRepository classroomRepo;

    ModelMapper modelMapper = new ModelMapper();

    public Classroom createClassroom(Classroom classroom) {
        return classroomRepo.save(classroom); 
    }

    public List<ClassroomBasicDto> getClassrooms(String description) {
        //List<Classroom> classrooms = classroomRepo.findAll();
        List<Classroom> classrooms = classroomRepo.findByDescriptionLike(description);
        List<ClassroomBasicDto> classroomDtos = modelMapper.map(classrooms, new TypeToken<List<ClassroomBasicDto>>() {}.getType());
        return classroomDtos;
    }

    public ClassroomCompleteDto getClassroom(Long id) {
        Classroom classroom = classroomRepo.findById(id).orElse(null);
        ClassroomCompleteDto classroomDto = modelMapper.map(classroom, ClassroomCompleteDto.class);
        return classroomDto;
    }

    public ClassroomCompleteDto editClassroom(Long id, Classroom classroom) {
        Classroom regClassroom = classroomRepo.findById(id).orElse(null);
        regClassroom.setDescription(classroom.getDescription());
        regClassroom.setClasstime(regClassroom.getClasstime());
        classroomRepo.save(regClassroom);
        ClassroomCompleteDto classroomDto = modelMapper.map(regClassroom, ClassroomCompleteDto.class);
        return classroomDto;
    }

    public void deleteClassroom(Long id) {
        classroomRepo.deleteById(id); 
    }
}