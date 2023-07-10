package com.challengeqi.challenge.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.challengeqi.challenge.Models.Professor;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    @Query("SELECT p FROM Professor p WHERE CONCAT(p.surnames, ' ', p.names) LIKE %:name%")
    List<Professor> findByNamesLike(@Param("name") String name);
}