package com.challengeqi.challenge.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Dtos.StudentBasicDto;
import com.challengeqi.challenge.Dtos.StudentCompleteDto;
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

    ModelMapper modelMapper = new ModelMapper();

    public Student createStudent(Student student) {
        return studentRepo.save(student); 
    }

    public List<StudentBasicDto> getStudents(String name, Long idClass) {
        //List<Student> students = studentRepo.findAll();
        //List<Student> students = studentRepo.findByNamesLike(name);
        List<Student> students;
        if (idClass != null) {
            students = studentRepo.findByNamesLikeAndClass(name, idClass);
        } else {
            students = studentRepo.findByNamesLike(name);
        }
        List<StudentBasicDto> studentDtos = modelMapper.map(students, new TypeToken<List<StudentBasicDto>>() {}.getType());
        return studentDtos;
    }
    
    public StudentCompleteDto getStudent(Long id) {
        try {
            Student student = studentRepo.findById(id).orElse(null);
            StudentCompleteDto studentDto = modelMapper.map(student, StudentCompleteDto.class);
            return studentDto;
        } catch (Exception error) {
            return null;
        }
    }

    public StudentCompleteDto editStudent(Long id, Student student) {
        Student regStudent = studentRepo.findById(id).orElse(null);
        regStudent.setNames(student.getNames());
        regStudent.setSurnames(student.getSurnames());
        regStudent.setDni(student.getDni());
        regStudent.setBirthdate(student.getBirthdate());
        regStudent.setPhone(student.getPhone());
        regStudent.setAddress(student.getAddress());
        studentRepo.save(regStudent);
        StudentCompleteDto studentDto = modelMapper.map(regStudent, StudentCompleteDto.class);
        return studentDto;
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