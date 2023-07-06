package com.challengeqi.challenge.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Models.Student;
import com.challengeqi.challenge.Repository.StudentRepository;

@Service
public class StudentServices {

    @Autowired
    StudentRepository studentRepo;

    public Student createStudent(Student student) {
        return studentRepo.save(student); 
    }

    public List<Student> getStudents() {
        return studentRepo.findAll(); 
    }

    public Student getStudent(Long id) {
        return studentRepo.findById(id).orElse(null); 
    }

    public void deleteStudent(Long id) {
        studentRepo.deleteById(id); 
    }

}