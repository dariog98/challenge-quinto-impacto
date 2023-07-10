package com.challengeqi.challenge.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
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

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "professor_id")
    private List<Classroom> classrooms;
}