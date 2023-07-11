package com.challengeqi.challenge.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "class")
public class Classroom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "description")
    private String description;
    
    @ManyToMany(mappedBy = "classrooms", fetch = FetchType.LAZY)
    private List<Student> students;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "professor_id")
    private Professor professor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "classtime_id")
    private Classtime classtime;

    public void addStudent(Student student) {
        students.add(student);
        student.getClassrooms().add(this);
    }

    public void removeStudent(Student student) {
        students.remove(student);
        student.getClassrooms().remove(this);
    }

    //public void removeStudent(Long idStudent){
    //    Student student = students.stream().filter(s -> s.getId() == idStudent).findFirst().orElse(null);
    //    students.remove(student);
    //    student.getClassrooms().remove(this);
    //}
}