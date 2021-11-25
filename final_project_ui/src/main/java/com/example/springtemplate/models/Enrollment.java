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

// TODO FIGURE OUT HOW TO INDICATE PRIMARY KEY AS SUPERKEY

@Entity
@Table(name="enrollments")
public class Enrollment implements Serializable {

    @ManyToOne
    @JsonIgnore
    @Id
    private Student student;

    @ManyToOne
    @JsonIgnore
    @Id
    private Club club;

    @Column(columnDefinition = "ENUM('MEMBER', 'PRESIDENT', 'VICE_PRESIDENT', 'TREASURER', 'SECRETARY', 'INACTIVE')")
    @Enumerated(EnumType.STRING)
    private MembershipStatus membershipStatus;

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

    public MembershipStatus getMembershipStatus() {
        return membershipStatus;
    }

    public void setMembershipStatus(MembershipStatus membershipStatus) {
        this.membershipStatus = membershipStatus;
    }

    public Enrollment(Student student, Club club, MembershipStatus membershipStatus) {
        this.student = student;
        this.club = club;
        this.membershipStatus = membershipStatus;
    }
}

