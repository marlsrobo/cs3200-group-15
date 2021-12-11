package com.example.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name="student_id", nullable = false)
    private Integer studentId;

    @JoinColumn(name="first_name", nullable = false)
    private String firstName;

    @JoinColumn(name="last_name", nullable = false)
    private String lastName;

    @JoinColumn(name="username", nullable = false)
    private String username;

    @JoinColumn(name="password", nullable = false)
    private String password;

    @JoinColumn(name="email", nullable = false)
    private String email;

    @JoinColumn(name="date_of_birth", nullable = false)
    private Date dateOfBirth;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Enrollment> enrollments;

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public List<Enrollment> getEnrollments() {
        return enrollments;
    }

    public void setEnrollments(List<Enrollment> enrollments) {
        this.enrollments = enrollments;
    }

    public Student(String firstName, String lastName, String username, String password, String email, Date dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    public Student() {}
}
