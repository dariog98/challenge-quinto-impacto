package com.challengeqi.challenge.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    String username;
    String password;
    String names;
    String surnames;
    String dni;
    String birthdate;
    String phone;
    String address;
}