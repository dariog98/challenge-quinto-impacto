package com.challengeqi.challenge.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Models.Classroom;
import com.challengeqi.challenge.Models.Student;
import com.challengeqi.challenge.Repository.ClassroomRepository;
import com.challengeqi.challenge.Repository.StudentRepository;

@Service
public class StudentServices {

    @Autowired
    StudentRepository studentRepo;
    @Autowired
    ClassroomRepository classroomRepo;

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

    public void addClassroom(Long id, Long idClassroom) {
        Student student = studentRepo.findById(id).orElse(null);
        Classroom classroom = classroomRepo.findById(idClassroom).orElse(null);

        if (student != null && classroom != null) {
            classroom.addStudent(student);
            classroomRepo.save(classroom);
        }
    }

    public void removeClassroom(Long id, Long idClassroom) {
        Student student = studentRepo.findById(id).orElse(null);
        Classroom classroom = classroomRepo.findById(idClassroom).orElse(null);

        if (student != null && classroom != null) {
            classroom.removeStudent(student);
            classroomRepo.save(classroom);
        }
    }
}