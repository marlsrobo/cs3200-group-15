package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mysql.cj.protocol.ColumnDefinition;
import com.sun.xml.bind.v2.model.core.ID;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="enrollments")
@IdClass(EnrollmentPk.class)
public class Enrollment implements Serializable {

    @ManyToOne
    @JoinColumn(name="student_id", nullable = false)
    @JsonIgnore
    @Id
    private Student student;

    @ManyToOne
    @JoinColumn(name="club_id", nullable = false)
    @JsonIgnore
    @Id
    private Club club;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public Enrollment(Student student, Club club) {
        this.student = student;
        this.club = club;
    }

    public Enrollment() {}
}

