package com.challengeqi.challenge.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Dtos.ClasstimeDto;
import com.challengeqi.challenge.Responses.ResponseHandler;
import com.challengeqi.challenge.Services.ClasstimeServices;

@RestController
@RequestMapping("/api/classtimes")
@CrossOrigin(origins = "http://localhost:5173")
public class ClasstimeController {
    @Autowired
    ClasstimeServices classtimeServices;

    @GetMapping
    public ResponseEntity<Object> getClasstimes() {
        try {
            List<ClasstimeDto> classtimes = classtimeServices.getClasstimes();
            return ResponseHandler.generateResponse("Request made successfully", HttpStatus.OK, classtimes);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }
}