package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.jfr.Unsigned;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="clubs")
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clubId;

    @ManyToOne
    @JsonIgnore
    private Location location;

    @OneToMany(mappedBy = "enrollment")
    @JsonIgnore
    private List<Enrollment> enrollments;

    private String name;
    private String category;
    private String advisor;
    private Integer budget;
    private Integer capacity;

    public Integer getClubId() {
        return clubId;
    }

    public void setClubId(Integer clubId) {
        this.clubId = clubId;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public List<Enrollment> getEnrollments() {
        return enrollments;
    }

    public void setEnrollments(List<Enrollment> enrollments) {
        this.enrollments = enrollments;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAdvisor() {
        return advisor;
    }

    public void setAdvisor(String advisor) {
        this.advisor = advisor;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Club(Integer clubId, Location location, List<Enrollment> enrollments, String name, String category, String advisor, Integer budget, Integer capacity) {
        this.clubId = clubId;
        this.location = location;
        this.enrollments = enrollments;
        this.name = name;
        this.category = category;
        this.advisor = advisor;
        this.budget = budget;
        this.capacity = capacity;
    }
}
