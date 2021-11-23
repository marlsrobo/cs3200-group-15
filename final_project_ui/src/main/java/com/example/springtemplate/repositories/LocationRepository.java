package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Location;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LocationRepository extends CrudRepository<Location, Integer> {
    @Query(value = "SELECT * FROM locations", nativeQuery = true)
    public List<Location> findAllLocations();

    @Query("SELECT * FROM locations WHERE locations.locationId=:locationId")
    public Location findLocationById(@Param("locationId") Integer locationId);
}