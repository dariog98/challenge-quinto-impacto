package com.challengeqi.challenge.Dtos;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class StudentCompleteDto {
    private Long id;
    private String names;
    private String surnames;
    private String dni;
    private String birthdate;
    private String phone;
    private String address;

    private List<ClassroomBasicDto> classrooms;
}
