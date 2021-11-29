package com.example.springtemplate.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

public class EnrollmentPk implements Serializable {

    private Student student;
    private Club club;

    public EnrollmentPk(Student student, Club club) {
        this.student = student;
        this.club = club;
    }

    public EnrollmentPk() {}

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EnrollmentPk that = (EnrollmentPk) o;
        return Objects.equals(student, that.student) && Objects.equals(club, that.club);
    }

    @Override
    public int hashCode() {
        return Objects.hash(student, club);
    }
}
