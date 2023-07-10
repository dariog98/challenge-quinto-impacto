package com.challengeqi.challenge.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Models.Student;
import com.challengeqi.challenge.Services.StudentServices;

@RestController
public class StudentController {
    
    @Autowired
    StudentServices studentServices;

    @GetMapping(value = "api/students")
    public List<Student> getStudents() {
        return studentServices.getStudents();
    }

    @PostMapping(value = "api/students")
    public void createStudent(@RequestBody Student student) {
        studentServices.createStudent(student);
    }

    @GetMapping(value = "api/students/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentServices.getStudent(id);
    }

    @DeleteMapping(value = "api/students/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentServices.deleteStudent(id);
    }

    @PostMapping(value = "api/students/{id}/classrooms/{idClassroom}")
    public void addClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        studentServices.addClassroom(id, idClassroom);
    }

    @DeleteMapping(value = "api/students/{id}/classrooms/{idClassroom}")
    public void removeClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        studentServices.removeClassroom(id, idClassroom);
    }
}