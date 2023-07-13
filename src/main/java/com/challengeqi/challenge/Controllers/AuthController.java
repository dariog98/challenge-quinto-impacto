package com.challengeqi.challenge.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.challengeqi.challenge.Request.LoginRequest;
import com.challengeqi.challenge.Request.RegisterRequest;
import com.challengeqi.challenge.Responses.AuthResponse;
import com.challengeqi.challenge.Responses.ResponseHandler;
import com.challengeqi.challenge.Services.AuthServices;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthServices authServices;

    @PostMapping(value = "/login")
    public ResponseEntity<Object> login(@RequestBody LoginRequest request) {
        try {
            AuthResponse response = authServices.login(request);
            return ResponseHandler.generateResponse("Login successfully", HttpStatus.OK, response);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }

    @PostMapping(value = "/register")
    public ResponseEntity<Object> register(@RequestBody RegisterRequest request) {
        try {
            AuthResponse response = authServices.register(request);
            return ResponseHandler.generateResponse("Register successfully", HttpStatus.OK, response);
        } catch (Exception error) {
            return ResponseHandler.generateResponse(error.getMessage(), HttpStatus.MULTI_STATUS, null);
        }
    }
}
