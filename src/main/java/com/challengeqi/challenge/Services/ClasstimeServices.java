package com.challengeqi.challenge.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challengeqi.challenge.Dtos.ClasstimeDto;
import com.challengeqi.challenge.Models.Classtime;
import com.challengeqi.challenge.Repository.ClasstimeRepository;

@Service
public class ClasstimeServices {

    @Autowired
    ClasstimeRepository classtimeRepo;

    ModelMapper modelMapper = new ModelMapper();

    public List<ClasstimeDto> getClasstimes() {
        List<Classtime> classtimes = classtimeRepo.findAll();
        List<ClasstimeDto> classtimesDtos = modelMapper.map(classtimes, new TypeToken<List<ClasstimeDto>>() {}.getType());
        return classtimesDtos;
    }

}