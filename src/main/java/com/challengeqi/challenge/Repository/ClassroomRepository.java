package com.challengeqi.challenge.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.challengeqi.challenge.Models.Classroom;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
    @Query("SELECT cl FROM Classroom cl WHERE cl.description LIKE %:description%")
    List<Classroom> findByDescriptionLike(@Param("description") String description);
}