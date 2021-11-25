package com.example.springtemplate.daos;

import com.example.springtemplate.models.Location;
import com.example.springtemplate.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LocationDao {
    @Autowired
    LocationRepository repository;

    @GetMapping("/locations")
    public List<Location> findAllLocations() {
        return repository.findAllLocations();
    }


    @GetMapping("/locations/{id}")
    public Location findLocationById(@PathVariable("id") Integer id) {
        return repository.findLocationById(id);
    }


    @GetMapping("/create/location/{virtual}/{campus}/{building}/{room-num}")
    public Location createLocation(@PathVariable("virtual") Boolean virtual,
                                 @PathVariable("campus") String campus,
                                 @PathVariable("building") String building,
                                 @PathVariable("room-num") Integer roomNumber) {
        Location location = new Location(virtual, campus, building, roomNumber);
        return repository.save(location);
    }

    @PutMapping("/locations/{locationId}")
    public Location updateLocation(
            @PathVariable("locationId") Integer id,
            @RequestBody Location locationUpdates) {
        Location location = repository.findLocationById(id);

        location.setVirtual(locationUpdates.getVirtual());
        location.setCampus(locationUpdates.getCampus());
        location.setBuilding(locationUpdates.getBuilding());
        location.setRoomNumber(locationUpdates.getRoomNumber());
        return repository.save(location);
    }

    @GetMapping("/locations/delete/{id}")
    public void deleteLocation(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
