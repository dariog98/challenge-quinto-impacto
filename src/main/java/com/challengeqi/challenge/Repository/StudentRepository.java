package com.challengeqi.challenge.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.challengeqi.challenge.Models.Student;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface StudentRepository extends JpaRepository<Student, Long> {
    //@Query("SELECT s FROM Student s JOIN s.classrooms cl WHERE cl.id = :class")
    //List<Student> findByNamesLikeAndClass(@Param("class") Long idClass);

    @Query("SELECT s FROM Student s JOIN s.classrooms cl WHERE CONCAT(s.surnames, ' ', s.names) LIKE %:name% and cl.id = :class")
    List<Student> findByNamesLikeAndClass(@Param("name") String name, @Param("class") Long idClass);

    @Query("SELECT s FROM Student s WHERE CONCAT(s.surnames, ' ', s.names) LIKE %:name%")
    List<Student> findByNamesLike(@Param("name") String name);

    //@Query("SELECT s FROM student s WHERE s.names like %:name%")
    //@Query(value = "SELECT * FROM student s WHERE CONCAT(s.surnames, ' ', s.names) LIKE %:name%", nativeQuery = true)
    //List<Student> findByNamesLike(@Param("name") String name);
}
