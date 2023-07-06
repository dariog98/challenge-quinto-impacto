package com.challengeqi.challenge.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Models.Classroom;
import com.challengeqi.challenge.Services.ClassroomServices;

@RestController
public class ClassroomController {
    @Autowired
    ClassroomServices classroomServices;

    @GetMapping(value = "api/classrooms")
    public List<Classroom> getClassrooms() {
        return classroomServices.getClassrooms();
    }

    @PostMapping(value = "api/classrooms")
    public void createClassroom(@RequestBody Classroom classroom) {
        classroomServices.createClassroom(classroom);
    }

    @GetMapping(value = "api/classrooms/{id}")
    public Classroom getClassroom(@PathVariable Long id) {
        return classroomServices.getClassroom(id);
    }

    @DeleteMapping(value = "api/classrooms/{id}")
    public void deleteClassroom(@PathVariable Long id) {
        classroomServices.deleteClassroom(id);
    }
}