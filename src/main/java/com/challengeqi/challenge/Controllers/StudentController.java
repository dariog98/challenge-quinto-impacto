package com.challengeqi.challenge.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Dtos.StudentBasicDto;
import com.challengeqi.challenge.Dtos.StudentCompleteDto;
import com.challengeqi.challenge.Models.Student;
import com.challengeqi.challenge.Responses.ResponseHandler;
import com.challengeqi.challenge.Services.StudentServices;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    
    @Autowired
    StudentServices studentServices;

    @GetMapping
    public ResponseEntity<Object> getStudents(@RequestParam(required = false, defaultValue = "") String name, @RequestParam(required = false) Long idClass) {
        try {
            List<StudentBasicDto> students = studentServices.getStudents(name, idClass);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, students);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> createStudent(@RequestBody Student student) {
        try {
            studentServices.createStudent(student);
            return ResponseHandler.generateResponse("Student created successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getStudent(@PathVariable Long id) {
        try {
            StudentCompleteDto student = studentServices.getStudent(id);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, student);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Object> editStudent(@PathVariable Long id, @RequestBody Student student) {
        try {
            StudentCompleteDto regStudent = studentServices.editStudent(id, student);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, regStudent);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> deleteStudent(@PathVariable Long id) {
        try {
            studentServices.deleteStudent(id);
            return ResponseHandler.generateResponse("Student deleted successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PostMapping(value = "/{id}/classrooms/{idClassroom}")
    public ResponseEntity<Object> addClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        try {
            studentServices.addClassroom(id, idClassroom);
            return ResponseHandler.generateResponse("Student added to class successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @DeleteMapping(value = "/{id}/classrooms/{idClassroom}")
    public ResponseEntity<Object> removeClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        try {
            studentServices.removeClassroom(id, idClassroom);
            return ResponseHandler.generateResponse("Student removed to class successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }
}