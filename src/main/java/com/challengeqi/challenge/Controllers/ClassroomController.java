package com.challengeqi.challenge.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Dtos.ClassroomBasicDto;
import com.challengeqi.challenge.Dtos.ClassroomCompleteDto;
import com.challengeqi.challenge.Models.Classroom;
import com.challengeqi.challenge.Responses.ResponseHandler;
import com.challengeqi.challenge.Services.ClassroomServices;

@RestController
@RequestMapping("/api/classrooms")
@CrossOrigin(origins = "http://localhost:5173")
public class ClassroomController {
    @Autowired
    ClassroomServices classroomServices;

    @GetMapping
    public ResponseEntity<Object> getClassrooms(@RequestParam(required = false, defaultValue = "") String description) {
        try {
            List<ClassroomBasicDto> classrooms = classroomServices.getClassrooms(description);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, classrooms);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> createClassroom(@RequestBody Classroom classroom) {
        try {
            classroomServices.createClassroom(classroom);
            return ResponseHandler.generateResponse("Class created successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getClassroom(@PathVariable Long id) {
        try {
            ClassroomCompleteDto classroom = classroomServices.getClassroom(id);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, classroom);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Object> editClassroom(@PathVariable Long id, @RequestBody Classroom classroom) {
        try {
            ClassroomCompleteDto regClassroom = classroomServices.editClassroom(id, classroom);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, regClassroom);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> deleteClassroom(@PathVariable Long id) {
        try {
            classroomServices.deleteClassroom(id);
            return ResponseHandler.generateResponse("Class created successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }
}