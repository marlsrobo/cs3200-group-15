package com.example.springtemplate.daos;

import com.example.springtemplate.models.Club;
import com.example.springtemplate.repositories.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ClubDao {
    @Autowired
    ClubRepository repository;

    @GetMapping("/clubs")
    public List<Club> findAllClubs() {
        return repository.findAllClubs();
    }

    @GetMapping("/clubs/{clubId}")
    public Club findClubById(@PathVariable("clubId") Integer clubId) {
        return repository.findClubById(clubId);
    }

    @PostMapping("/clubs")
    public Club createClub(@RequestBody Club club) {
        return repository.save(club);
    }

    @PutMapping("/clubs/{clubId}")
    public Club updateClub(
            @PathVariable("clubId") Integer clubId,
            @RequestBody Club clubUpdates) {
        Club club = repository.findClubById(clubId);

        club.setName(clubUpdates.getName());
        club.setCategory(clubUpdates.getCategory());
        club.setAdvisor(clubUpdates.getAdvisor());
        club.setBudget(clubUpdates.getBudget());
        club.setCapacity(clubUpdates.getCapacity());
        return repository.save(club);
    }

    @DeleteMapping("/clubs/{clubId}")
    public void deleteClub(
            @PathVariable("clubId") Integer clubId) {
        repository.deleteById(clubId);
    }
}
