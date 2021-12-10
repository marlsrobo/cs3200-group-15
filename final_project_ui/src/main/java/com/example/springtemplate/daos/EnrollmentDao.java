package com.example.springtemplate.daos;

import com.example.springtemplate.models.Enrollment;
import com.example.springtemplate.models.Enrollment;
import com.example.springtemplate.repositories.EnrollmentRepository;
import com.example.springtemplate.repositories.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EnrollmentDao {
    @Autowired
    EnrollmentRepository repository;

    @GetMapping("/api/enrollments")
    public List<Enrollment> findAllEnrollments() {
        return repository.findAllEnrollments();
    }

    @GetMapping("/api/enrollments/{studentId}/{clubId}")
    public Enrollment findEnrollmentBySuperKey(@PathVariable("studentId") Integer studentId,
                                         @PathVariable("clubId") Integer clubId) {
        return repository.findEnrollmentSuperKey(studentId, clubId);
    }

    @PostMapping("/api/enrollments")
    public Enrollment createEnrollment(@RequestBody Enrollment enrollment) {
        return repository.save(enrollment);
    }

    @PutMapping("/api/enrollments/{studentId}/{clubId}")
    public Enrollment updateEnrollment(
            @PathVariable("studentId") Integer studentId,
            @PathVariable("clubId") Integer clubId,
            @RequestBody Enrollment enrollmentUpdates) {
        Enrollment enrollment = repository.findEnrollmentSuperKey(studentId, clubId);

        enrollment.setStudent(enrollmentUpdates.getStudent());
        enrollment.setClub(enrollmentUpdates.getClub());
        return repository.save(enrollment);
    }

    @DeleteMapping("/api/enrollments/{studentId}/{clubId}")
    public void deleteEnrollment(
            @PathVariable("studentId") Integer studentId,
            @PathVariable("clubId") Integer clubId) {
        repository.deleteEnrollmentBySuperKey(studentId, clubId);
    }
}
