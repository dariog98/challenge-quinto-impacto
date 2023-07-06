package com.challengeqi.challenge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.challengeqi.challenge.Models.Classroom;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
    
}
