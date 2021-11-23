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
    private Integer locationId;
    private Boolean virtual;
    private String campus;
    private Integer building;
    private Integer roomNumber;

    @OneToMany(mappedBy = "club")
    @JsonIgnore
    private List<Club> clubs;

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public Boolean getVirtual() {
        return virtual;
    }

    public void setVirtual(Boolean virtual) {
        this.virtual = virtual;
    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
    }

    public Integer getBuilding() {
        return building;
    }

    public void setBuilding(Integer building) {
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

    public Location(Integer locationId, Boolean virtual, String campus, Integer building, Integer roomNumber, List<Club> clubs) {
        this.locationId = locationId;
        this.virtual = virtual;
        this.campus = campus;
        this.building = building;
        this.roomNumber = roomNumber;
        this.clubs = clubs;
    }
}
