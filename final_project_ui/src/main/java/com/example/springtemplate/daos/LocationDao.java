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

    @GetMapping("/locations")
    public List<Location> findAllLocations() {
        return repository.findAllLocations();
    }


    @GetMapping("/locations/{id}")
    public Location findLocationById(@PathVariable("id") Integer id) {
        return repository.findLocationById(id);
    }


    @PostMapping("/locations")
    public Location createLocation(@RequestBody Location location) {
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

    @DeleteMapping("/locations/{id}")
    public void deleteLocation(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
