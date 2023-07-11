package com.challengeqi.challenge.Dtos;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ClassroomCompleteDto {
    private Long id;
    private String description;
    private ClasstimeDto classtime;
    private List<StudentBasicDto> students;
    private ProfessorBasicDto professor;
}