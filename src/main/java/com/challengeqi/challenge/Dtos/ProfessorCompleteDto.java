package com.challengeqi.challenge.Dtos;

import java.util.List;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfessorCompleteDto {
    private Long id;
    private String names;
    private String surnames;
    private String dni;
    private String birthdate;
    private String phone;
    private String address;

    private List<ClassroomBasicDto> classrooms;
}