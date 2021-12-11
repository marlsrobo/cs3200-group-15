package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="clubs")
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clubId;

    @ManyToOne
    @JoinColumn(name="location_id", nullable = true)
    @JsonIgnore
    private Location location;

    @OneToMany(mappedBy = "club")
    @JsonIgnore
    private List<Enrollment> enrollments;

    @JoinColumn(name="name", nullable = false)
    private String name;

    @Column(columnDefinition = "ENUM('ACADEMIC', 'SOCIAL', 'SPORTS', 'ART', 'BUSINESS', 'CULTURAL')")
    @Enumerated(EnumType.STRING)
    @JoinColumn(name="category", nullable = false)
    private ClubCategory category;

    @JoinColumn(name="advisor", nullable = false)
    private String advisor;
    @JoinColumn(name="budget", nullable = false)
    private Integer budget;
    @JoinColumn(name="capacity", nullable = false)
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
        return category.toString();
    }

    public void setCategory(String category) {
        this.category = ClubCategory.valueOf(category.toUpperCase());
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


    public Club(String name, String category, String advisor, Integer budget, Integer capacity) {
        this.name = name;
        this.category = ClubCategory.valueOf(category.toUpperCase());
        this.advisor = advisor;
        this.budget = budget;
        this.capacity = capacity;
    }

    public Club() {super();}
}
