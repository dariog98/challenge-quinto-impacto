package com.challengeqi.challenge.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@Entity
@Table(name = "professor")
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "names")
    private String names;
    @Column(name = "surnames")
    private String surnames;
    @Column(name = "dni")
    private String dni;
    @Column(name = "birthdate")
    private String birthdate;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;

    //@OneToMany
    //private List<Classroom> classrooms;
}