package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Enrollment;
import com.example.springtemplate.models.EnrollmentPk;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EnrollmentRepository extends CrudRepository<Enrollment, EnrollmentPk> {
    @Query(value = "SELECT * FROM enrollments", nativeQuery = true)
    public List<Enrollment> findAllEnrollments();

    @Query(value = "SELECT * FROM enrollments WHERE enrollments.club_id=:clubId", nativeQuery = true)
    public List<Enrollment> findEnrollmentsByClubId(@Param("clubId") Integer clubId);

    @Query(value = "SELECT * FROM enrollments WHERE enrollments.student_id=:studentId", nativeQuery = true)
    public List<Enrollment> findEnrollmentsByStudentId(@Param("studentId") Integer studentId);

    @Query(value = "SELECT * FROM enrollments WHERE enrollments.student_id=:studentId AND enrollments.club_id=:clubId", nativeQuery = true)
    public Enrollment findEnrollmentSuperKey(@Param("studentId") Integer studentId,
                                              @Param("clubId") Integer clubId);

    @Modifying
    @Query(value = "DELETE FROM enrollments WHERE enrollments.student_id=:studentId AND enrollments.club_id=:clubId", nativeQuery = true)
    public void deleteEnrollmentBySuperKey(@Param("studentId") Integer studentId,
                                           @Param("clubId") Integer clubId);
}
