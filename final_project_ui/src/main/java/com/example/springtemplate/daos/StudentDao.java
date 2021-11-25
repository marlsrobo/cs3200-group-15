package com.example.springtemplate.daos;

import com.example.springtemplate.models.Student;
import com.example.springtemplate.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class StudentDao {
    @Autowired
    StudentRepository repository;

    @GetMapping("/students")
    public List<Student> findAllStudents() {
        return repository.findAllStudents();
    }


    @GetMapping("/students/{id}")
    public Student findStudentById(@PathVariable("id") Integer id) {
        return repository.findStudentById(id);
    }


    @GetMapping("/create/student/{fn}/{ln}/{un}/{pw}/{email}/{dob}")
    public Student createStudent(@PathVariable("fn") String first,
                                 @PathVariable("ln") String last,
                                 @PathVariable("un") String uname,
                                 @PathVariable("pw") String pass,
                                 @PathVariable("email") String email,
                                 @PathVariable("dob") Date dob) {
        Student student = new Student(first, last, uname, pass, email, dob);
        return repository.save(student);
    }

    @PutMapping("/students/{studentId}")
    public Student updateStudent(
            @PathVariable("studentId") Integer id,
            @RequestBody Student studentUpdates) {
        Student student = repository.findStudentById(id);

        student.setFirstName(studentUpdates.getFirstName());
        student.setLastName(studentUpdates.getLastName());
        student.setUsername(studentUpdates.getUsername());
        student.setPassword(studentUpdates.getPassword());
        student.setEmail(studentUpdates.getEmail());
        student.setDateOfBirth(studentUpdates.getDateOfBirth());
        return repository.save(student);
    }

    @GetMapping("/students/delete/{id}")
    public void deleteStudent(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
