package com.example.springtemplate.daos;

import com.example.springtemplate.models.Student;
import com.example.springtemplate.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StudentDao {
    @Autowired
    StudentRepository repository;

    @PostMapping("/api/students")
    public Student createStudent(@RequestBody Student student) {
        return repository.save(student);
    }

    @GetMapping("/api/students")
    public List<Student> findAllStudents() {
        return repository.findAllStudents();
    }

    @GetMapping("/api/students/{studentId}")
    public Student findStudentById(@PathVariable("studentId") Integer studentId) {
        return repository.findStudentById(studentId);
    }

    @PutMapping("/api/students/{studentId}")
    public Student updateStudent(
            @PathVariable("studentId") Integer studentId,
            @RequestBody Student studentUpdates) {
        Student student = repository.findStudentById(studentId);

        student.setFirstName(studentUpdates.getFirstName());
        student.setLastName(studentUpdates.getLastName());
        student.setUsername(studentUpdates.getUsername());
        student.setPassword(studentUpdates.getPassword());
        student.setEmail(studentUpdates.getEmail());
        student.setDateOfBirth(studentUpdates.getDateOfBirth());
        return repository.save(student);
    }

    @DeleteMapping("/api/students/{studentId}")
    public void deleteStudent(
            @PathVariable("studentId") Integer studentId) {
        repository.deleteById(studentId);
    }
}
