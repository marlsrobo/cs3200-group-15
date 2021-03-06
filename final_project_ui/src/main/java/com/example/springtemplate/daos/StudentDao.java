package com.example.springtemplate.daos;

import com.example.springtemplate.models.Club;
import com.example.springtemplate.models.Enrollment;
import com.example.springtemplate.models.Location;
import com.example.springtemplate.models.Student;
import com.example.springtemplate.repositories.ClubRepository;
import com.example.springtemplate.repositories.EnrollmentRepository;
import com.example.springtemplate.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StudentDao {
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    ClubRepository clubRepository;

    @Autowired
    EnrollmentRepository enrollmentRepository;

    @PostMapping("/api/students")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }


    @PostMapping("/api/clubs/{clubId}/students")
    public Student createStudentForClub(
            @PathVariable("clubId") Integer clubId,
            @RequestBody Student student) {

        student = studentRepository.save(student);
        Club club = clubRepository.findClubById(clubId);
        Enrollment enrollment = new Enrollment(student, club);

        List<Enrollment> studentEnrollments = student.getEnrollments();
        studentEnrollments.add(enrollment);
        student.setEnrollments(studentEnrollments);

        List<Enrollment> clubEnrollments = club.getEnrollments();
        clubEnrollments.add(enrollment);
        club.setEnrollments(clubEnrollments);

        clubRepository.save(club);
        return studentRepository.save(student);
    }


    @GetMapping("/api/clubs/{clubId}/students")
    public List<Student> findStudentsForClub(
            @PathVariable("clubId") Integer clubId) {
        List<Enrollment> enrollments = enrollmentRepository.findEnrollmentsByClubId(clubId);
        List<Student> students = new ArrayList<>();
        for (Enrollment enrollment : enrollments) {
            students.add(enrollment.getStudent());
        }
        return students;
    }

    @GetMapping("/api/students/{studentId}/clubs")
    public List<Club> findClubsForStudent(@PathVariable("studentId") Integer studentId) {
        Student student = studentRepository.findStudentById(studentId);
        List<Enrollment> enrollments = student.getEnrollments();
        List<Club> clubs = new ArrayList<>();
        for (Enrollment e : enrollments) {
            clubs.add(e.getClub());
        }
        return clubs;
    }

    @GetMapping("/api/students")
    public List<Student> findAllStudents() {
        return studentRepository.findAllStudents();
    }

    @GetMapping("/api/students/{studentId}")
    public Student findStudentById(@PathVariable("studentId") Integer studentId) {
        return studentRepository.findStudentById(studentId);
    }

    @PutMapping("/api/students/{studentId}")
    public Student updateStudent(
            @PathVariable("studentId") Integer studentId,
            @RequestBody Student studentUpdates) {
        Student student = studentRepository.findStudentById(studentId);

        student.setFirstName(studentUpdates.getFirstName());
        student.setLastName(studentUpdates.getLastName());
        student.setUsername(studentUpdates.getUsername());
        student.setPassword(studentUpdates.getPassword());
        student.setEmail(studentUpdates.getEmail());
        student.setDateOfBirth(studentUpdates.getDateOfBirth());
        return studentRepository.save(student);
    }

    @DeleteMapping("/api/students/{studentId}")
    public void deleteStudent(
            @PathVariable("studentId") Integer studentId) {
        studentRepository.deleteById(studentId);
    }
}