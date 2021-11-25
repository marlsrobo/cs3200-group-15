package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Student;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Integer> {
  @Query(value = "SELECT * FROM students", nativeQuery = true)
  public List<Student> findAllStudents();

  @Query(value = "SELECT * FROM students WHERE students.student_id=:studentId", nativeQuery = true)
  public Student findStudentById(@Param("studentId") Integer studentId);
}
