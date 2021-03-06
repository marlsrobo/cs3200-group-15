package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.xml.bind.v2.model.core.ID;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="locations")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name="location_id", nullable = false)
    private Integer locationId;

    @JoinColumn(name="in_person", nullable = false)
    private Boolean inPerson;

    @JoinColumn(name="campus", nullable = false)
    private String campus;

    @JoinColumn(name="building", nullable = false)
    private String building;

    @JoinColumn(name="room_number", nullable = false)
    private Integer roomNumber;

    @OneToMany(mappedBy = "location")
    @JsonIgnore
    private List<Club> clubs;

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public Boolean getInPerson() {
        return inPerson;
    }

    public void setInPerson(Boolean inPerson) {
        this.inPerson = inPerson;
    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer roomNumber) {
        this.roomNumber = roomNumber;
    }

    public List<Club> getClubs() {
        return clubs;
    }

    public void setClubs(List<Club> clubs) {
        this.clubs = clubs;
    }

    public Location(Boolean inPerson, String campus, String building, Integer roomNumber) {
        this.inPerson = inPerson;
        this.campus = campus;
        this.building = building;
        this.roomNumber = roomNumber;
    }

    public Location() {}
}
