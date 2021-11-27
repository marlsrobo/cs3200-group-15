package com.example.springtemplate.daos;

import com.example.springtemplate.models.Location;
import com.example.springtemplate.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class LocationDao {
    @Autowired
    LocationRepository repository;

    @GetMapping("/api/locations")
    public List<Location> findAllLocations() {
        return repository.findAllLocations();
    }


    @GetMapping("/api/locations/{locationId}")
    public Location findLocationById(@PathVariable("locationId") Integer locationId) {
        return repository.findLocationById(locationId);
    }


    @PostMapping("/api/locations")
    public Location createLocation(@RequestBody Location location) {
        return repository.save(location);
    }

    @PutMapping("/api/locations/{locationId}")
    public Location updateLocation(
            @PathVariable("locationId") Integer locationId,
            @RequestBody Location locationUpdates) {
        Location location = repository.findLocationById(locationId);

        location.setVirtual(locationUpdates.getVirtual());
        location.setCampus(locationUpdates.getCampus());
        location.setBuilding(locationUpdates.getBuilding());
        location.setRoomNumber(locationUpdates.getRoomNumber());
        return repository.save(location);
    }

    @DeleteMapping("/api/locations/{locationId}")
    public void deleteLocation(
            @PathVariable("locationId") Integer locationId) {
        repository.deleteById(locationId);
    }
}
