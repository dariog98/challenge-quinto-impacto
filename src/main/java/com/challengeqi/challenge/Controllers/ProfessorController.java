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

import com.challengeqi.challenge.Dtos.ProfessorBasicDto;
import com.challengeqi.challenge.Dtos.ProfessorCompleteDto;
import com.challengeqi.challenge.Models.Professor;
import com.challengeqi.challenge.Responses.ResponseHandler;
import com.challengeqi.challenge.Services.ProfessorServices;

@RestController
@RequestMapping("api/professors")
public class ProfessorController {
    
    @Autowired
    ProfessorServices professorServices;

    @GetMapping
    public ResponseEntity<Object> getProfessors(@RequestParam(required = false, defaultValue = "") String name) {
        try {
            List<ProfessorBasicDto> professors = professorServices.getProfessors(name);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, professors);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> createProfessor(@RequestBody Professor professor) {
        try {
            professorServices.createProfessor(professor);
            return ResponseHandler.generateResponse("Professor created successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getProfessor(@PathVariable Long id) { 
        try {
            ProfessorCompleteDto professor = professorServices.getProfessor(id);
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, professor);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Object> editProfessor(@PathVariable Long id, @RequestBody Professor professor) {
        try {
            ProfessorCompleteDto regProfessor = professorServices.editProfessor(id, professor);
            return ResponseHandler.generateResponse("Professor edited successfully", HttpStatus.OK, regProfessor);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> deleteProfessor(@PathVariable Long id) {
        try {
            professorServices.deleteProfessor(id);
            return ResponseHandler.generateResponse("Professor deleted successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PostMapping(value = "/{id}/classrooms/{idClassroom}")
    public ResponseEntity<Object> addClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        try {
            professorServices.addClassroom(id, idClassroom);
            return ResponseHandler.generateResponse("Class added to professor successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @DeleteMapping(value = "/{id}/classrooms/{idClassroom}")
    public ResponseEntity<Object> removeClassroom(@PathVariable Long id, @PathVariable Long idClassroom) {
        try {
            professorServices.removeClassroom(id, idClassroom);
            return ResponseHandler.generateResponse("Class removed to professor successfully", HttpStatus.OK, null);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }
}
