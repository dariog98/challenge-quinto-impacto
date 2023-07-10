package com.challengeqi.challenge.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Models.User;
import com.challengeqi.challenge.Repository.UserRepository;
import com.challengeqi.challenge.Request.LoginRequest;
import com.challengeqi.challenge.Request.RegisterRequest;
import com.challengeqi.challenge.Responses.AuthResponse;

@Service
public class AuthServices {
    
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user = userRepo.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();
    }

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
        .username(request.getUsername())
        .password(passwordEncoder.encode(request.getPassword()))
        .names(request.getNames())
        .surnames(request.getSurnames())
        .dni(request.getDni())
        .birthdate(request.getBirthdate())
        .address(request.getAddress())
        .build();

        userRepo.save(user);

        return AuthResponse.builder()
            .token(jwtService.getToken(user))
            .build();
    }
}
